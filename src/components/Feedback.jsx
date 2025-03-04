

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div>
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedbacks: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
};

export default Feedback;

