import styles from './feedback-options.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <div className={styles.buttonsContainer}>
      {
        options.map((option) => {
          return (<button key={option} className={styles.rateButton} onClick={() => {
            onLeaveFeedback(option);
          }}>{option}</button>);
        })
      }
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
