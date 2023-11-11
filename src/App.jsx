import { useState, useEffect } from "react";
import QuestionDisplay from "./components/QuestionDisplay";
import QuestionEndDisplay from "./components/QuestionEndDisplay";
import questions from "../questions";

const App = () => {
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  useEffect(() => {
    if (timer === 0) {
      moveToNextQuestion();
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);
  const handleAnswerSelect = (selectedQuestionIndex) => {
    const isCorrect =
      questions[currentQuestionIndex].correct === selectedQuestionIndex;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
    moveToNextQuestion();
  };
  const moveToNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
    setTimer(10);
  };
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsQuizFinished(false);
    setTimer(10);
  };
  return (
    <div className="flex max-w-full items-center justify-center">
      <div className="mr-auto flex w-full flex-col items-center justify-center gap-2 font-bold">
        <h1 className="text-center text-3xl text-black">Quiz App</h1>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-500 p-8 text-white ">
          {isQuizFinished ? (
            <QuestionEndDisplay
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              restartQuiz={restartQuiz}
            />
          ) : (
            <QuestionDisplay
              question={questions[currentQuestionIndex].question}
              answers={questions[currentQuestionIndex].answers}
              timer={timer}
              handleAnswerSelect={handleAnswerSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
