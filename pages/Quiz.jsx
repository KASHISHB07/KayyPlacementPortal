import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    question: "What is 7 x 8?",
    options: ["54", "56", "64", "72"],
    answer: "56",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "C++"],
    answer: "CSS",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-black to-gray-900 px-6">
        <motion.div
          className="max-w-xl w-full bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-6">Quiz Completed 🎉</h2>
          <p className="text-2xl mb-4">You scored:</p>
          <p className="text-5xl font-bold text-purple-400 mb-8">{score} / {questions.length}</p>
          <button
            onClick={handleRestart}
            className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
          >
            Retake Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Question {current + 1} of {questions.length}
        </h2>
        <p className="text-xl mb-6 text-center">{questions[current].question}</p>
        <div className="grid gap-4">
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              className={`w-full py-3 px-4 rounded-xl transition-all font-medium ${
                selected === option
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-40"
          >
            <ChevronLeft /> Previous
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500"
          >
            {current === questions.length - 1 ? 'Submit' : 'Next'} <ChevronRight />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
