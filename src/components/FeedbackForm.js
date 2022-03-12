import React, { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

export default function FeedbackForm() {
  const [text, setText] = useState('');

  return (
    <Card>
      <form>
        <h2>Please Rate</h2>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a Review'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type='submit'>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}
