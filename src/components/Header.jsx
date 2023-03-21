import React from 'react';
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header>
      <FaChevronLeft />
      <div className={styles.rightIcons}>
        <FaMicrophone />
        <FaCog />
      </div>
    </header>
  );
}

export default Header;
