// src/components/PracticeSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tests = [
  { id: 1, name: "Practice Test 1 " },
  { id: 2, name: "Practice Test 2 " },
  { id: 3, name: "Practice Test 3 " },
  { id: 4, name: "Practice Test 4 " },
  { id: 5, name: "Practice Test 5 " },
  { id: 6, name: "Practice Test 6 " },
];

const PracticeSelection = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const navigate = useNavigate();

  const handleStart = () => {
    if (selectedTest) {
      navigate(`/test/${selectedTest}`);
    } else {
      alert("Please select a practice test to proceed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4 py-10">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Select a Practice Test</h1>
        <form className="space-y-4 text-left">
          {tests.map((test) => (
            <label
              key={test.id}
              className="flex items-center cursor-pointer hover:bg-indigo-50 rounded-md p-3 transition"
            >
              <input
                type="radio"
                name="practiceTest"
                value={test.id}
                checked={selectedTest === test.id}
                onChange={() => setSelectedTest(test.id)}
                className="mr-4 accent-indigo-600"
              />
              <span className="text-lg text-gray-700">{test.name}</span>
            </label>
          ))}
        </form>
        <button
          onClick={handleStart}
          className="mt-4 inline-block w-full bg-purple-700 text-white hover:bg-orange-600  text-sm py-3 rounded-full transition hover:border-black"
        >
          Start Selected Test
        </button>
      </div>
    </div>
  );
};

export default PracticeSelection;
