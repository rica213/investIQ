import React from 'react';
import styles from '../styles/Search.module.css';

const Search = () => (
  <form>
    <input type="search" id="search" name="q" placeholder="Search by Symbol | eg. AAPL" className={styles.searchBy} />
    <button type="button" className={styles.searchBtn}>Search</button>
  </form>
);

export default Search;
