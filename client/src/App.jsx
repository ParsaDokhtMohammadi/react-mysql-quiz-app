import { useState } from "react";
import "./App.css";
import axios from "axios";
import QuestionCard from "./components/questionCard";
import Results from "./components/Results";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [status , setStatus] = useState("quiz")
  const [rightAnswers, setRightAnswers] = useState(0);
 
  
  const progress = ((index + 1) / questions.length) * 100;

  const getQuestions = () => {
    axios.get("http://localhost:3001/quiz").then((res) => {
      setQuestions(res.data);
    });
  };

  const handleNext = () => {
    if (index !== questions.length - 1) {
      setIndex(index + 1);
    }
  };
  const goToResults = ()=>{
    setStatus("results")
    CalcResult()
  }

  const handlePrev = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const handleSelect = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };
  const restartQuiz = () =>{
    setStatus("quiz")
    setQuestions([])
    setAnswers([])
    setIndex(0)
  }
  
const CalcResult = () => {
  let count = 0
  questions.forEach((question, ind) => {
    if (question.correct_option === answers[ind]) {
      count++
    }
  });
  setRightAnswers(count)
};

  return (
    <>
      <div
        className={`${
          questions.length == 0 ? "flex" : "hidden"
        }  flex-col gap-8 justify-center items-center`}
      >
        <h2 className="text-3xl font-bold">Welcome to my awesome quiz app</h2>
        <button onClick={getQuestions} className="w-[150px]">
          Start Quiz
        </button>
      </div>

      <div
        className={`${
          questions.length == 0 || status=="results" ? "hidden" : "flex"
        }  flex-col gap-8 justify-center items-center w-[460px] border-2 p-4 rounded-2xl `}
      >
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <QuestionCard
          question={questions[index]}
          selected={answers[index]}
          onSelect={handleSelect}
        />

        <div className="flex justify-between w-full">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={index==19 ?goToResults :handleNext}>
            {index == 19 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <div className={`${status=='results'? "block": "hidden"} w-full`}>
        <Results questions={questions} answers={answers} rightAnswers={rightAnswers}></Results>
      </div>
      <div className={`w-full flex justify-center mt-4 ${questions.length==0 ? "hidden" : "block"}`}>
        <button onClick={restartQuiz}>restart</button>
      </div>
      
    </>
  );
}

export default App;
