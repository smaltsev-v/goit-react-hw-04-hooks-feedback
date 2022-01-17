import React, { Component } from "react";
import Control from './components/Control';
import Statistics from './components/Statistics';
import Section from "./components/Section";
import './App.css'




class App extends Component {
  
  state = {
    good: 0,
    neutral:0, 
    bad: 0,
  };

  btnClickFeedback = (e) => {
    const nameKey = e.currentTarget.name;
    this.setState((prevState) => {
      return {
        [nameKey]: prevState[nameKey] + 1,
      };
    });
   };
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = Math.round((good / totalFeedback) * 100);

    return positiveFeedback ? positiveFeedback : 0
  };
  



render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage() + "% ";

    return (
      <div className="App">
        <Section title="Please leave feedback:">
          <Control
            options={this.state}
            onLeaveFeedback={this.btnClickFeedback}
          />
          <h1>Statistics:</h1>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
 };
export default App;