import { useState } from 'react';
import styles from './app.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (value) => {
    setState((prevState) => ({
        ...prevState,
        [value]: prevState[value] + 1,
      }),
    );
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((state.good / (countTotalFeedback() || 1)) * 100);
  };

  return (
    <div className={styles.feedback}>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(state)}
                         onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title='Statistics'>
        <Statistics good={state.good}
                    bad={state.bad}
                    neutral={state.neutral}
                    positivePercentage={countPositiveFeedbackPercentage()}
                    total={countTotalFeedback()}
        />
      </Section>
    </div>
  );
};
