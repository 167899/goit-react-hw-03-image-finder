import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={styles.button}>
        Loade more
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
