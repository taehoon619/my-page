import React from "react";
import Title from "../ui/Title/Title";
import styles from "./Contact.module.css";

export default function Contact({ elementRef }) {
  return (
    <article ref={elementRef} className={styles.container}>
      <div className={styles.wrap}>
        <Title font="Contact" lineColor="#6c757d" color="#fff" />
        <div className={styles.listWrap}>
          <a
            className={styles.itemWrap}
            href="https://www.github.com/taehoon619"
          >
            <div className={styles.nameWrap}>
              <img
                className={styles.nameImg}
                src="/images/github.png"
                alt="github"
              />
            </div>
            <div className={styles.address}>github.com/taehoon619</div>
            <div className={styles.textTitle}>
              <b>소스 코드 저장소</b>입니다.
            </div>
            <ul className={styles.textWrap}>
              <li className={styles.text}>
                과거 프로젝트, 프로그램, 앱의 소스 코드
              </li>
              <li className={styles.text}>
                혼자서 코딩 연습을 위해 끄적이던 소스 코드
              </li>
            </ul>
          </a>
          <a
            className={styles.itemWrap}
            href="https://moored-fear-6c4.notion.site/cc6d3171424f424694ad8b68cc216ab8"
          >
            <div className={styles.nameWrap}>
              <img
                className={styles.nameImg}
                src="/images/notion.png"
                alt="notion"
              />
            </div>
            <div className={styles.address}>
              https://moored-fear-6c4.notion.site/
              <br />
              cc6d3171424f424694ad8b68cc216ab8
            </div>
            <div className={styles.textTitle}>
              <b>이태훈의 Portfolio 노션</b>입니다.
            </div>
            <ul className={styles.textWrap}>
              <li className={styles.text}>
                자기소개와 Portfolio가 정리되어있습니다.
              </li>
              <li className={styles.text}>
                기술개발서와 기술스택이 정리되어있습니다.
              </li>
            </ul>
          </a>
        </div>
      </div>
    </article>
  );
}
