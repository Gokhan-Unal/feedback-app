import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

export default function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext);
  if ((!loading && !feedback) || feedback.length === 0) {
    return <p>No Feedback</p>;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} {...item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
