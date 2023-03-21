import React from 'react';
import styles from '../styles/Companies.module.css';

const Companies = () => {
  const companies = [
    { name: 'flies', symbol: 'level', id: '42f634b2-66c3-51b7-bb24-55d579705313' },
    { name: 'statement', symbol: 'count', id: '47c51018-58ba-5a66-9b59-30bcbb0b7c3c' },
    { name: 'east', symbol: 'lesson', id: 'f0b6a92d-2527-5cc0-8d25-86d894155b40' },
    { name: 'social', symbol: 'taste', id: '2f2cdf90-a426-5fe6-bd44-4c35541c26e5' },
    { name: 'family', symbol: 'rope', id: '80012884-66e8-5f31-9377-5d915fa58b7f' },
    { name: 'step', symbol: 'thrown', id: '46349771-7bc0-5194-8c98-5c4fd0d177e0' },
    { name: 'sing', symbol: 'flight', id: 'bcedb5d5-57c2-53ab-b7ab-76c175ae089f' },
  ];
  return (
    <ul className={styles.companiesList}>
      {companies.map((company) => (
        <li key={company.id}>
          <div className={styles.bottom}>
            <h4 className={styles.name}>{company.name}</h4>
            <h5 className={styles.symbol}>{company.symbol}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Companies;
