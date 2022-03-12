import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import { v4 as uuidv4 } from 'uuid';

export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  /*
   * NOTE: This should be checking input value
   * not state as state won't be the updated value
   * until the next render of the component
   */
  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== null && value.trim().length <= 10) {
      setMessage('Please enter at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating,
      };
      console.log(newFeedback);
      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please Rate</h2>
        <RatingSelect selected={rating} onSelect={setRating} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a Review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}
