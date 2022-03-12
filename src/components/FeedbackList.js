import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

export default function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} {...item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};
