import React from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => (
  <article className={styles.profile}>
    <section className={styles.headline}>
      <img src="" alt="logo goes here" className={styles.logo} />
      <div>
        <h2 className={styles.name}>Apple</h2>
        <h3 className={styles.symbol}>AAPL</h3>
      </div>
    </section>
    <div className={styles.title}>Profile details</div>
    <section className={styles.details}>
      <div className={styles.row}>
        <span>Price:</span>
        <p>some metrics</p>
      </div>
      <div className={styles.row}>
        <span>Currency:</span>
        <p>some metrics</p>
      </div>
      <div className={styles.row}>
        <span>CEO:</span>
        <p>some metrics</p>
      </div>
      <div className={styles.row}>
        <span>Industry:</span>
        <p>some metrics</p>
      </div>
      <div className={styles.row}>
        <span>Website:</span>
        <p>some metrics</p>
      </div>
    </section>
  </article>
);

export default Profile;
