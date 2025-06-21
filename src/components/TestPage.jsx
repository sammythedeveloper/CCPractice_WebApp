// src/components/TestPage.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Question from './Question';
import QuestionNavigation from './QuestionNavigation';
import { useNavigate } from 'react-router-dom';
import useTimer from '../utils/timer'; // assuming it's a custom hook
import { calculateScore } from '../utils/scoring';

const questions = [
  // your question objects: { id, text, options, correctAnswer }
];

const TestPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const { timeLeft, isTimeUp } = useTimer(15 * 60); // 15 min timer

  useEffect(() => {
    if (isTimeUp) {
      handleSubmit();
    }
  }, [isTimeUp]);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore(questions, answers);
    navigate('/result', { state: { score, answers } });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <div className="text-xl font-mono text-indigo-600">
            Time Left: {Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, '0')}:
            {(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>
        <Question
          question={questions[currentIndex]}
          selectedAnswer={answers[questions[currentIndex].id]}
          onAnswer={handleAnswer}
        />
        <QuestionNavigation
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          isLast={currentIndex === questions.length - 1}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;
