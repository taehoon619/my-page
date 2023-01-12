import React from 'react';
import styles from './Skills.module.css';

export default function Skills({ elementRef }) {
  return (
    <div className={styles.container} ref={elementRef}>
      <span className={styles.main}>Skills</span>
      <div className={styles.skills}>
        <div className={styles.item}>⦿HTML</div>
        <div className={styles.item}>⦿CSS</div>
        <div className={styles.item}>⦿JAVASCRIPT</div>
        <div className={styles.item}>⦿REACT</div>
      </div>
    </div>
  );
}

// 표로 만들어서 내용적기 ?
// 단순 아이콘 호버 ?