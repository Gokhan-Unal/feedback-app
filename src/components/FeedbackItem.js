import React, { useContext } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ id, rating, text }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const item = { id, rating, text };
  console.log('id: ', id);
  return (
    <Card reverse>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <button>Rate</button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string,
};
