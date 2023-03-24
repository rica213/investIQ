import React, { useState, useEffect } from 'react';
import styles from '../styles/ScrollToTopButton.module.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={styles.scrollToTop}
      onClick={handleButtonClick}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Top
    </button>
  );
}

export default ScrollToTopButton;
