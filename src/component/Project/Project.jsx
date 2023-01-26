import React from 'react';
import styles from './Project.module.css';
import Title from '../Title/Title';
import { projectData } from '../../data/projectData';

export default function Project({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <Title font="Project" lineColor="black" color="black" />

      {projectData.map((data) => {
        return (
          <div className={styles.itemWrap}>
            <div className={styles.item}>
              <div className={styles.thumbnail}>
                <img src={data.images} alt="thumbnail" />
              </div>
              <div className={styles.textWrap}>
                <div className={styles.text}>
                  <div>
                    <h3 className={styles.textTitle}>{data.title}</h3>
                    <h5 className={styles.textDetail}>{data.detail}</h5>
                  </div>
                  <div className={styles.btn}>자세히 보기</div>
                </div>
                <ul>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>frontend</div>
                    <div className={styles.projectDetail}>{data.frontend}</div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>github</div>
                    <div className={styles.projectDetail}>
                      <a href={data.github}>{data.github}</a>
                    </div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>url</div>
                    <div className={styles.projectDetail}>
                      <a href={data.url}>{data.url}</a>
                    </div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>deployment</div>
                    <div className={styles.projectDetail}>
                      {data.deployment}
                    </div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>deployment</div>
                    <div className={styles.projectDetail}>
                      {data.deployment}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
