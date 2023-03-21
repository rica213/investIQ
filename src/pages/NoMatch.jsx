import React from 'react';
import styles from '../styles/NoMatch.module.css';

const NoMatch = () => (
  <div className={styles.NoMatch}>
    <h1>The page you are looking for does not exist</h1>
    <button type="button" className={styles.backHomeBtn}>Back To Homepage</button>
  </div>
);

export default NoMatch;
