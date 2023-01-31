import React from 'react';
import styles from './FullScreenDialog.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';
import Portal from '../../utills/Portal';

export default function FullScreenDialog({ handleModal, project, num }) {
  const { title, summary, detail, background, meaning, techStack, url } =
    project;
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <Portal>
      <article className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>README.md</div>
          <div onClick={() => handleModal(num)} className={styles.closeBtnWrap}>
            <AiOutlineClose className={styles.closeBtn} />
          </div>
        </div>
        <div className={styles.wrap}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.UrlTitle}>🔗 Deplotment URL</h2>
          <a href={url} className={styles.url} target='_blank' rel='noopener noreferrer'>
            {url}
          </a>
          <h2 className={styles.detailTitle}>📌 Summary</h2>
          <p className={styles.detail}>{summary}</p>
          <h4 className={styles.functionTitle}>*주요 기능</h4>
          <ul className={styles.functionList}>
            {detail.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <h2 className={styles.detailTitle}>🤔 Background</h2>
          <p className={styles.detail}>{background}</p>
          <br />
          <h2 className={styles.detailTitle}>🔍 Meaning</h2>
          <p className={styles.detail}>{meaning}</p>
          <p></p>
          <br />
          <h2 className={styles.detailTitle}>🔨 Technology Stack(s)</h2>
          <ul className={styles.detailList}>
            {techStack.frontend && <li>Frontend : {techStack.frontend}</li>}
            {techStack.backend && <li>Backend : {techStack.backend}</li>}
            {techStack.database && <li>Database : {techStack.database}</li>}
            {techStack.deployment && (
              <li>Deployment : {techStack.deployment}</li>
            )}
          </ul>
        </div>
      </article>
    </Portal>
  );
}
