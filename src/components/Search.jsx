import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilter,
  searchByName,
  searchBySymbol,
} from '../redux/companies/companiesSlice';
import styles from '../styles/Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const { isSearchByName } = useSelector((store) => store.modal);
  const [term, setTerm] = useState('');

  return (
    <form
      className={styles.searchForm}
      onChange={() => {
        if (term === '') dispatch(resetFilter());
      }}
    >
      {isSearchByName && (
        <input
          type="text"
          placeholder="Search by Name | eg. Apple"
          className={styles.searchBy}
          onChange={(e) => setTerm(e.target.value)}
        />
      )}
      {!isSearchByName && (
        <input
          type="text"
          placeholder="Search by Symbol | eg. AAPL"
          className={styles.searchBy}
          onChange={(e) => setTerm(e.target.value)}
        />
      )}
      <button
        type="button"
        className={styles.searchBtn}
        onClick={
          isSearchByName
            ? () => dispatch(searchByName(`${term}`))
            : () => dispatch(searchBySymbol(`${term}`))
        }
      >
        Search
      </button>
    </form>
  );
};

export default Search;
