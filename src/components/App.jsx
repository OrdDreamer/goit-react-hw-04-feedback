import { Component } from 'react';
import styles from './app.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / (this.countTotalFeedback() || 1)) * 100);
  };

  render() {
    return (
      <div className={styles.feedback}>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)}
                           onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title='Statistics'>
          <Statistics good={this.state.good}
                      bad={this.state.bad}
                      neutral={this.state.neutral}
                      positivePercentage={this.countPositiveFeedbackPercentage()}
                      total={this.countTotalFeedback()}
          />
        </Section>
      </div>
    );
  }
}
