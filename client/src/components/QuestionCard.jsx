import React from "react";

const QuestionCard = ({ question, selected, onSelect }) => {
  const title = question?.title;
  const id = question?.id;
  const option1 = question?.option1;
  const option2 = question?.option2;
  const option3 = question?.option3;
  const option4 = question?.option4;
  return (
    <div className="flex flex-col gap-3 w-full ">
      <h2 className="text-2xl font-bold text-center">{title}</h2>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`answer-${id}`}
            value={option1}
            checked={selected === option1}
            onChange={() => onSelect(option1)}
            className="cursor-pointer"
          />
          <label>{option1}</label>
        </div>

        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`answer-${id}`}
            value={option2}
            checked={selected === option2}
            onChange={() => onSelect(option2)}
            className="cursor-pointer"
          />
          <label>{option2}</label>
        </div>

        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`answer-${id}`}
            value={option3}
            checked={selected === option3}
            onChange={() => onSelect(option3)}
            className="cursor-pointer"
          />
          <label>{option3}</label>
        </div>

        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`answer-${id}`}
            value={option4}
            checked={selected === option4}
            onChange={() => onSelect(option4)}
            className="cursor-pointer"
          />
          <label>{option4}</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
