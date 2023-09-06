import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-loading-indicators';
import styles from '../styles/Profile.module.css';
import Summary from '../components/Summary';

const Profile = () => {
  const { details, isLoading } = useSelector((store) => store.profile);

  if (isLoading) {
    return (
      <Spinner
        style={{
          fontSize: '0.5rem',
          position: 'absolute',
          top: '25%',
          left: '50%',
        }}
        color="white"
      />
    );
  }

  return (
    <article className={styles.profile}>
      {!isLoading && (
        <section className={styles.headline}>
          <img
            src={details[0].image}
            alt={details[0].companyName}
            className={styles.logo}
          />
          <div>
            <h2 className={styles.name}>{details[0].companyName}</h2>
            <h3 className={styles.symbol}>{details[0].symbol}</h3>
          </div>
        </section>
      )}
      <Summary title="Profile details" />
      {!isLoading && (
        <section className={styles.details}>
          <div className={styles.row}>
            <span>Price:</span>
            <p>{details[0].price}</p>
          </div>
          <div className={styles.row}>
            <span>Currency:</span>
            <p>{details[0].currency}</p>
          </div>
          <div className={styles.row}>
            <span>CEO:</span>
            <p>{details[0].ceo}</p>
          </div>
          <div className={styles.row}>
            <span>Industry:</span>
            <p>{details[0].industry}</p>
          </div>
          <div className={styles.row}>
            <span>Website:</span>
            <p>{details[0].website}</p>
          </div>
        </section>
      )}
    </article>
  );
};

export default Profile;
