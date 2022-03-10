import React, { useState } from 'react';

export default function FeedbackItem({ id, rating, text }) {
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button>Rate</button>
    </div>
  );
}
