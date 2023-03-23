import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Summary.module.css';

const Summary = ({ title }) => (
  <article className={styles.summary}>
    <p>{title}</p>
  </article>
);

Summary.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Summary;
