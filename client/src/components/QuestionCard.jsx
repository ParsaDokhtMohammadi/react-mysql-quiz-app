import React from "react";

const QuestionCard = ({ question, selected, onSelect }) => {
  const title = question?.title;
  const id = question?.id;
  const option1 = question?.option1;
  const option2 = question?.option2;
  const option3 = question?.option3;
  const option4 = question?.option4;
  return (
    <div className="flex flex-col gap-3">
      <h2>{title}</h2>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name={`answer-${id}`}
            value={option1}
            checked={selected === option1}
            onChange={() => onSelect(option1)}
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
          />
          <label>{option4}</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
