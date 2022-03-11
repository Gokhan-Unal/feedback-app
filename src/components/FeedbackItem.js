import React, { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';

export default function FeedbackItem({ id, rating, text }) {
  return (
    <Card reverse>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button>Rate</button>
    </Card>
  );
}


FeedbackItem.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  text: PropTypes.string,
};
