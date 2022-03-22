import React, { useContext, useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ id, rating, text }) {
  const {deleteFeedback} = useContext(FeedbackContext);
  console.log('id: ', id);
  return (
    <Card reverse>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
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
