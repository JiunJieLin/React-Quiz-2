const QuestionEndDisplay = ({ correctCount, incorrectCount, restartQuiz }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl">測驗結束</h3>
      <p>答對:{correctCount}題</p>
      <p>答錯:{incorrectCount}題</p>
      <button
        className="rounded-md bg-green-500 px-2 py-1 text-white focus:scale-50"
        onClick={restartQuiz}
      >
        重新測驗
      </button>
    </div>
  );
};

export default QuestionEndDisplay;
