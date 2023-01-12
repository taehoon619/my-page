import React from 'react';
import styles from './Contact.module.css';

export default function Contact({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.main}>Contact</div>
      <div className={styles.item}>
        <div className={styles.link}>plok619@naver.com</div>
        <div className={styles.link}>Git</div>
      </div>
    </div>
  );
}
