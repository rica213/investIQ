import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = () => (
  <div className={styles.overlay}>
    <span className={styles.closeBtn}>&times;</span>
    <div className={styles.modal}>
      <fieldset>
        <legend>Search by:</legend>
        <div>
          <label htmlFor="symbol">
            <input
              type="radio"
              id="symbol"
              name="searchBy"
              value="symbol"
              checked
            />
            Symbol
          </label>
        </div>
        <div>
          <label htmlFor="name">
            <input type="radio" id="name" name="searchBy" value="name" />
            Name
          </label>
        </div>
      </fieldset>
    </div>
  </div>
);

export default Modal;
