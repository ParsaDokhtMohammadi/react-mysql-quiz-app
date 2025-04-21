import React from 'react'
import { useState } from 'react';
const Results = ({questions , answers , rightAnswers}) => {



  return (
    <div className="flex flex-col items-center gap-6 p-6 w-full max-w-2xl mx-auto  rounded-2xl ">
        <h2 className="text-2xl font-bold text-center ">
            you got {rightAnswers}/20 right
        </h2>
        <ul className="flex flex-col gap-4 w-full">
          {questions.map((question, ind) => {
            const yourAnswer = answers[ind];
            const isCorrect = yourAnswer === question.correct_option;
            return (
              <li
                key={question.id}
                className={`flex justify-between items-center p-4 rounded-xl border ${
                  isCorrect
                    ? "border-green-400 bg-green-50"
                    : "border-red-400 bg-red-50"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-700">Q{ind + 1}</span>
                  <span className="text-sm text-gray-500 italic">
                    Correct: {question.correct_option}
                  </span>
                  <span
                    className={`text-sm ${
                      isCorrect ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    Your Answer: {yourAnswer || "No answer"}
                  </span>
                </div>
                <div className="text-2xl">{isCorrect ? "✅" : "❌"}</div>
              </li>
            );
          })}
        </ul>
        
      </div>
  )
}

export default Results