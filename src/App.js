import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);

  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
    setFeedback([...feedback, newFeedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}
