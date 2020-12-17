import PropTypes from 'prop-types';

export default function Button({ option, onLeaveFeedback }) {
  return (
    <button
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {option}
    </button>
  );
}

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
