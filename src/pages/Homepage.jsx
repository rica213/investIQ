import React from 'react';
import bgHeadline from '../assets/images/bg-headline.jpg';
import Companies from '../components/Companies';
import Search from '../components/Search';
import Summary from '../components/Summary';
import styles from '../styles/Homepage.module.css';

const Homepage = () => (
  <>
    <div
      className={styles.headline}
      style={{ backgroundImage: `url(${bgHeadline})` }}
    >
      <a
        href="https://www.freepik.com/free-vector/investment-data-concept-illustration_12704375.htm#query=finance%20illustration&position=4&from_view=search&track=ais"
        className={styles.attribution}
      >
        Image by storyset
      </a>
      {' '}
      on Freepik
    </div>
    <Search />
    <Summary />
    <Companies />
  </>
);

export default Homepage;
