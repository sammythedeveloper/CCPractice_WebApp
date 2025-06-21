// src/components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate('/test');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4 py-10">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl w-full text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 font-sans tracking-tight">
          🧠 CCAT Practice
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed font-medium">
          Tackle 50 timed questions across <span className="font-semibold text-indigo-600">Verbal</span>, <span className="font-semibold text-indigo-600">Math</span>, and <span className="font-semibold text-indigo-600">Logic</span>.
          You've got <span className="underline">15 minutes</span> — let’s test those brain muscles!
        </p>
        <button
          onClick={handleStartTest}
          className="mt-4 inline-block bg-purple-700  hover:bg-white text-white hover:text-black  py-2 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl text-sm transition border hover:border-black"
        >
          🚀 Start the Test
        </button>
      </div>
    </div>
  );
};

export default HomePage;
