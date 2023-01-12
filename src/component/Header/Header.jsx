import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header({ goodsTabs }) {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ul className={styles.container}>
        {Array.from(goodsTabs).map((tab, index) => {
          // console.log(tab);
          return (
            <li
              className={styles.button}
              onClick={tab.onMoveToElement}
              key={index}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>
      <div
        className={`${styles.upBtn} ${scrollTop && styles.activeUpbtn}`}
        onClick={handleScrollTop}
      ></div>
    </>
  );
}
