import React from 'react';
import Title from '../Title/Title';
import styles from './Contact.module.css';

export default function Contact({ elementRef }) {
  return (
    <article ref={elementRef} className={styles.container}>
      <div className={styles.wrap}>
        <Title font="Contact" lineColor="#6c757d" color="#fff" />
        <div className={styles.listWrap}>
          <div className={styles.itemWrap}>
            <div className={styles.wrapper}>
              <div className={styles.nameWrap}>
                <img
                  className={styles.nameImg}
                  src="/images/github.png"
                  alt="git"
                />
              </div>
              <a href='https://github.com/taehoon619/' className={styles.address}>github.com/taehoon619</a>
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
            </div>
            <div className={styles.hr} />
            <div className={styles.wrapper}>
              <div className={styles.nameWrap}>
                <img
                  className={styles.nameImg}
                  src="/images/notion.png"
                  alt="notion"
                />
              </div>
              <div className={styles.address}>
                https://grave-jute-6f6.notion.site/WOOK-s-Portfolio-a465e17624d141378fdc4b8effba7d78
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
            </div>
            <div className={styles.hr} />
            <div className={styles.wrapper}>
              <ul className={styles.contactWrap}>
                <div className={styles.textTitle}>
                  <b>Contact</b>
                </div>
                <li className={styles.text}>010-0000-0000</li>
                <li className={styles.text}>qwert@gamil.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
