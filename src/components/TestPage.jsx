import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
import Question from "./Question";
import QuestionNavigation from "./QuestionNavigation";
import useTimer from "../utils/timer";
import { calculateScore } from "../utils/scoring";

const TestPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const { timeLeft, isTimeUp } = useTimer(15 * 60);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/data/questions_test_${testId}.json`);
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        console.error("Failed to load questions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [testId]);

  useEffect(() => {
    if (isTimeUp) {
      handleSubmit(); // Auto-submit when time is up
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
    navigate("/result", { state: { score, answers } });
  };

  if (loading) return <p className="text-center mt-10">Loading questions...</p>;
  if (!questions.length)
    return <p className="text-center mt-10">No questions found.</p>;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <div className="text-xl font-mono text-indigo-600">
            Time Left:{" "}
            {Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0")}
            :{(timeLeft % 60).toString().padStart(2, "0")}
          </div>
        </div>

        <Question
          question={questions[currentIndex]}
          selectedAnswer={answers[questions[currentIndex]?.id]}
          onAnswer={handleAnswer}
        />

        <QuestionNavigation
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          isLast={currentIndex === questions.length - 1}
        />
      </main>
    </div>
  );
};

export default TestPage;
