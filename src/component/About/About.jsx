import React from 'react';
import styles from './About.module.css';

export default function About({ elementRef }) {
  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.main}>About me</div>
      <div className={styles.text}>
        내용dddddddddkdkdkd아아아아아ㅏ아아아ㅏ아아아
      </div>
    </div>
  );
}
