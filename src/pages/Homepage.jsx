import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-loading-indicators';
import bgHeadline from '../assets/images/bg-headline.jpg';
import Companies from '../components/Companies';
import Search from '../components/Search';
import Summary from '../components/Summary';
import styles from '../styles/Homepage.module.css';
import Modal from '../components/Modal';
import { getAllCompanies } from '../redux/companies/companiesSlice';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Homepage = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

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
      <Summary title="Publicly Traded Companies based in US" />
      <Companies />
      {isOpen && <Modal />}
      <ScrollToTopButton />
    </>
  );
};

export default Homepage;
