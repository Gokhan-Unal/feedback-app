import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = (children) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is a basic feedback app',
      rating: 5,
    },
  ]);
  return (
    <FeedbackContext.Provider value={{ feedback }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
