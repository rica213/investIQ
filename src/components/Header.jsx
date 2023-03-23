import React from 'react';
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resetFilter } from '../redux/companies/companiesSlice';
import { openModal } from '../redux/modal/modalSlice';
import styles from '../styles/Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <header>
      <NavLink to="/">
        <FaChevronLeft
          className={styles.link}
          onClick={() => {
            dispatch(resetFilter());
          }}
        />
      </NavLink>
      <div className={styles.rightIcons}>
        <FaMicrophone />
        <FaCog onClick={handleOpenModal} />
      </div>
    </header>
  );
}

export default Header;
