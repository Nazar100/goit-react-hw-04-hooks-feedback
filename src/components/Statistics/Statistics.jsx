import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statisics({ good, neutral, bad, total, average }) {
  let rating = average() >= 50 ? 'green' : 'red';

  return (
    <ul className={s.list}>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total: {total()}</li>
      <li style={{ color: rating }}>Average:{average()}%</li>
    </ul>
  );
}

Statisics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  average: PropTypes.func.isRequired,
};
