import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            className={css.btn}
            key={index}
            name={option}
            onClick={e => onLeaveFeedback(e)}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
