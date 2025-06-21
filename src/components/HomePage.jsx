// src/components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate('/test');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300 px-4">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 font-sans">
          Welcome to CCAT Practice
        </h1>
        <p className="text-gray-700 text-md md:text-lg mb-8 leading-relaxed">
          Practice 50 questions across Verbal, Math & Logic, Spatial, and Logical Reasoning.
          You have 15 minutes. Let's sharpen your cognitive skills!
        </p>
        <button
          onClick={handleStartTest}
          className="bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition transform duration-200"
        >
          🚀 Start Test
        </button>
      </div>
    </div>
  );
};

export default HomePage;
