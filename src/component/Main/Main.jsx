import React from "react";
import styles from "./Main.module.css";
import { useState, useEffect } from "react";

export default function Main() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = `Developer \n 이태훈입니다`;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count >= completionWord.length) {
        clearInterval(typingInterval);
      } else {
        setTitle((prevTitleValue) => {
          let result = prevTitleValue
            ? prevTitleValue + completionWord[count]
            : completionWord[0];
          setCount(count + 1);
          return result;
        });
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </article>
  );
}
