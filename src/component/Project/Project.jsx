import React from 'react';
import styles from './Project.module.css';

export default function Project({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.main}>Project</div>
      <div className={styles.lead}>
        <div className={styles.item}>
          <div className={styles.sum}></div>
          <div className={styles.text}></div>
        </div>
        <div className={styles.item}>
          <div className={styles.sum}></div>
          <div className={styles.text}></div>
        </div>
        <div className={styles.item}>
          <div className={styles.sum}></div>
          <div className={styles.text}></div>
        </div>
      </div>
    </div>
  );
}
