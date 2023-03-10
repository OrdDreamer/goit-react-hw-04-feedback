import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  return (
    <>
      {total
        ? (<>
          <p className={styles.rateItem}>Good: {good}</p>
          <p className={styles.rateItem}>Neutral: {neutral}</p>
          <p className={styles.rateItem}>Bad: {bad}</p>
          <p className={styles.rateItem}>Total: {total}</p>
          <p className={styles.rateItem}>Positive feedback: {positivePercentage}%</p>
        </>)
        : (<Notification message={'There is no feedback'} />)
      }
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
