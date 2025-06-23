import React from 'react';

const QuestionNavigation = ({ onNext, onPrev, onSubmit, isLast }) => {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrev}
        disabled={false}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Previous
      </button>

      {isLast ? (
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionNavigation;
