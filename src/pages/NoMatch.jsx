import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NoMatch.module.css';

const NoMatch = () => (
  <div className={styles.NoMatch}>
    <h1>The page you are looking for does not exist</h1>
    <NavLink to="/">
      <button type="button" className={styles.backHomeBtn}>
        Back To Homepage
      </button>
    </NavLink>
  </div>
);

export default NoMatch;
