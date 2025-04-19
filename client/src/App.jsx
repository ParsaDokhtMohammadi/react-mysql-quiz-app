import { useState } from "react";
import "./App.css";
import axios from "axios";
import QuestionCard from "./components/questionCard";
function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
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

  return (
    <>
      <div
        className={`${
          questions.length == 0 ? "flex" : "hidden"
        }  flex-col gap-8 justify-center items-center`}
      >
        <h2 className="text-3xl font-bold">welcome to my awsome quiz app</h2>
        <button onClick={getQuestions} className="w-[150px]">
          start quize
        </button>
      </div>
      <div
        className={`${
          questions.length == 0 ? "hidden" : "flex"
        }  flex-col gap-8 justify-center items-center`}
      >
        <QuestionCard
          question={questions[index]}
          selected={answers[index]} // what was chosen for this question
          onSelect={handleSelect}
        />
        <div className="flex gap-52">
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </>
  );
}

export default App;
