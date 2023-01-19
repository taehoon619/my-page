import React from 'react';
import styles from './Title.module.css';

export default function Title({ font, lineColor, color }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.text}
        style={{ color: color, borderBottomColor: lineColor }}
      >
        {font}
      </div>
    </div>
  );
}
