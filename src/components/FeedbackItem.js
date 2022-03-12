import React, { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

export default function FeedbackItem({ id, rating, text, handleDelete }) {
  console.log('id: ', id);
  return (
    <Card reverse>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={() => handleDelete(id)} className='close'>
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
