import React, { useState, createContext, useContext } from 'react';
const FeedbackContext = createContext();


export const useFeedback = () => useContext(FeedbackContext);


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);

    const addFeedback = (newFeedback) => {
        setFeedback([...feedback, newFeedback]);
    };

    return (
        <FeedbackContext.Provider value={{ feedback, addFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};


