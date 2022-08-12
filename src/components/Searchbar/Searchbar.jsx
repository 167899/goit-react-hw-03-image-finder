import PropTypes from 'prop-types';

import { IoMdSearch } from 'react-icons/io';

import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, name, onChange }) => {
  return (
    <header className={styles.searchbar}>
      <form onSubmit={onSubmit} className={styles.form}>
        <button type="submit" className={styles.button}>
          <IoMdSearch className={styles.ico} />
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
