import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ setModalOpen }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <article className={styles.modalBox}>
        <div className={styles.contentWrap}>
          <h1>Q n A</h1>
          <div>
            <h2>Q1. 자기소개</h2>
            <p>
              무엇인가를 만드는 일, 디자인을 통해서 더 많은 사람들에게 편안함을
              준다는 것이 매력적으로 다가왔습니다.
            </p>
          </div>
          <div>
            <h2>내가 개발자가 되기로 한 이유</h2>
            <p>
              무엇인가를 만드는 일, 디자인을 통해서 더 많은 사람들에게 편안함을
              준다는 것이 매력적으로 다가왔습니다.
            </p>
          </div>
          <div>
            <h2></h2>
          </div>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.modalBtn} onClick={closeModal}>
            닫기
          </button>
        </div>
      </article>
    </div>
  );
}
