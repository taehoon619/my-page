import React from 'react';
import styles from './Main.module.css';

export default function Main({ elementRef }) {
  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.mainText}>Hello</div>
    </div>
  );
}
