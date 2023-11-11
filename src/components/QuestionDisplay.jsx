const QuestionDisplay = ({ question, answers, timer, handleAnswerSelect }) => {
  const answerLabel = ["A", "B", "C", "D"];

  return (
    <>
      <h2 className="text-2xl">{question}</h2>
      <p className="text-lg text-green-500">剩餘時間:{timer}秒</p>
      <div className="flex w-full flex-col gap-3">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={handleAnswerSelect}
            className=" bg-blue-500 py-2"
          >
            {answerLabel[index]}.{answer}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionDisplay;
