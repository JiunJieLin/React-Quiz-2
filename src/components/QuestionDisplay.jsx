const QuestionDisplay = ({ question, answers, timer, handleAnswerSelect }) => {
  const answerLabel = ["A", "B", "C", "D"];

  return (
    <div>
      <h2>{question}</h2>
      <p>剩餘時間:{timer}秒</p>
      <div>
        {answers.map((answer, index) => (
          <button key={index} onClick={handleAnswerSelect}>
            {answerLabel[index]}.{answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;
