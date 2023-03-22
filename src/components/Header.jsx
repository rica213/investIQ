import React from "react";
import { FaChevronLeft, FaCog, FaMicrophone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <FaChevronLeft className={styles.link} />
      </NavLink>
      <div className={styles.rightIcons}>
        <FaMicrophone />
        <FaCog />
      </div>
    </header>
  );
}

export default Header;
