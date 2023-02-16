import React from "react";
import styles from "./Button.module.css";

export default function Button({ modalOpen, font, modalClick, closeModal }) {
  return (
    <button onClick={modalClick} className={styles.container}>
      {font}
    </button>
  );
}
