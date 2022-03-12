import React, { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}
