import React from "react";

const Question = ({ question, selectedAnswer, onAnswer }) => {
  if (!question) return null;

  const { id, question_text, options } = question;
  const optionLabels = ["A.", "B.", "C.", "D."];

  return (
    <div>
      <h3>{question_text}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
                <label style={{ display: "flex", alignItems: "center", gap: "4px" }} >
                {optionLabels[index]} 
              <input
                type="radio"
                name={`question-${id}`}
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onAnswer(id, option)}
              />
            {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
