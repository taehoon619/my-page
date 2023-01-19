import React from 'react';
import styles from './Main.module.css';
import { useState, useEffect } from 'react';

export default function Main() {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = `Developer \n 이태훈입니다`;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count >= completionWord.length) {
        clearInterval(typingInterval);
      } else {
        setBlogTitle((prevTitleValue) => {
          let result = prevTitleValue
            ? prevTitleValue + completionWord[count]
            : completionWord[0];
          setCount(count + 1);
          return result;
        });
      }
    }, 400);

    return () => {
      clearInterval(typingInterval);
    };
  });

  // console.log(blogTitle, '2222');

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{blogTitle}</h2>
      </div>
    </div>
  );
}
