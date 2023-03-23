import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  getProfile,
  updateCurrentCompany,
} from '../redux/profile/profileSlice';
import styles from '../styles/Companies.module.css';

const Companies = () => {
  const { filteredCompanies } = useSelector((store) => store.companies);
  const dispatch = useDispatch();

  return (
    <ul className={styles.companiesList}>
      {filteredCompanies.map((company) => (
        <NavLink to="/profile" key={company.symbol} className={styles.link}>
          {/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */}
          <li
            role="button"
            onClick={() => {
              dispatch(updateCurrentCompany(company.symbol));
              dispatch(getProfile(company.symbol));
            }}
            onKeyDown={() => {
              dispatch(updateCurrentCompany(company.symbol));
              dispatch(getProfile(company.symbol));
            }}
          >
            <div className={styles.bottom}>
              <h4 className={styles.name}>{company.symbol}</h4>
              <h5 className={styles.symbol}>{company.price}</h5>
              <h5 className={styles.symbol}>{company.exchangeShortName}</h5>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Companies;
