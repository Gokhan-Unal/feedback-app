import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const averageRating =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average rating:{' '}
        {feedback.length ? averageRating : 'There is no rating to get average'}
      </h4>
    </div>
  );
}
