import React, { useState } from "react";
import Control from './components/Control';
import Statistics from './components/Statistics';
import Section from "./components/Section";
import './App.css'




export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  
  const btnClickFeedback = option  => {
     
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  
  
   const countTotalFeedback = () => {
    return good + neutral + bad;
  };


   const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  



    
    

    return (
      <div className="App">
        <Section title="Please leave feedback:">
          <Control
           options={['good', 'neutral', 'bad']}
            onLeaveFeedback={btnClickFeedback}
          />
          <h1>Statistics:</h1>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
};
 
