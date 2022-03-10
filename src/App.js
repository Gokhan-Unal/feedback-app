import React, { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}
