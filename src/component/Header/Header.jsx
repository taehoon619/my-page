import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { debounce } from 'lodash';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header({ goodsTabs }) {
  const [scrollTop, setScrollTop] = useState(true);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth < 1000) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    }, 500);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHamburger = () => {
    setOpenHamburger((status) => !status);
  };

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
      <div className={styles.container}>
        <ul className={styles.wrap}>
          <span className={styles.logo} onClick={handleScrollTop}>
            Portfolio
          </span>
          {isDesktop ? (
            Array.from(goodsTabs).map((tab, index) => {
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
            })
          ) : (
            <div className={styles.hamburgerWrap}>
              <RxHamburgerMenu
                className={styles.hamburgerBtn}
                onClick={handleHamburger}
              />
            </div>
          )}
        </ul>
        {!isDesktop && (
          <ul
            className={`${styles.menuListMobile} ${
              !openHamburger && styles.menuFolded
            }`}
          >
            {Array.from(goodsTabs).map((tab, index) => {
              return (
                <li
                  className={styles.menuMobile}
                  onClick={() => {
                    tab.onMoveToElement();
                    handleHamburger();
                  }}
                  key={index}
                >
                  {tab.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div
        className={`${styles.upBtn} ${scrollTop && styles.activeUpbtn}`}
        onClick={handleScrollTop}
      >
        ▲
      </div>
    </>
  );
}
