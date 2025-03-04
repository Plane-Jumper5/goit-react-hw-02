import React, { useState, useEffect } from "react";
import Feedback from "./Feedback";
import Options from "./Options";
import "./App.css"; 
import Notification from "./Notification";



const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="app-container">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <div className="buttons-container">
        <Options onLeaveFeedback={handleFeedback} />
        <button className="reset-button" onClick={resetFeedback}>Reset Feedback</button>
      </div>
      <Feedback feedback={feedback} total={totalFeedback} />
    </div>
  );
};

export default App;









