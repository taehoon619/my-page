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
              <a href='https://moored-fear-6c4.notion.site/0e78f9fc7c3b47ee8f4315249bcad766' className={styles.address}>
              https://moored-fear-6c4.notion.site/0e78f9fc7c3b47ee8f4315249bcad766
              </a>
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
                <div className={styles.contactTitle}>
                  <b>Contact</b>
                </div>
                <li className={styles.contactAddress}>010-5021-8665</li>
                <li className={styles.contactAddress}>plok619@gamil.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
