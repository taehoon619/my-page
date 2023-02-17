import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ modalClick }) {
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

  return (
    <div className={styles.container}>
      <article className={styles.modalBox}>
        <div className={styles.contentWrap}>
          <h3 className={styles.qna}>Q n A</h3>
          <ul className={styles.textWrap}>
            <li className={styles.textBox}>
              <h2 className={styles.title}>Q1. 자기소개</h2>
              <p className={styles.text}>
                무엇인가를 만드는 일, 디자인을 통해서 더 많은 사람들에게
                편안함을 준다는 것이 매력적으로 다가왔습니다.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>내가 개발자가 되기로 한 이유</h2>
              <p className={styles.text}>
                무엇인가를 만드는 일, 디자인을 통해서 더 많은 사람들에게
                편안함을 준다는 것이 매력적으로 다가왔습니다.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.modalBtn} onClick={modalClick}>
            닫기
          </button>
        </div>
      </article>
    </div>
  );
}
