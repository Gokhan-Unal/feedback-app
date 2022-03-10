import React from 'react';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} {...item} />
      ))}
    </div>
  );
}
