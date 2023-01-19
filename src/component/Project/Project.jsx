import React from 'react';
import styles from './Project.module.css';
import Title from '../Title/Title';
import { projectData } from '../../data/projectData';

export default function Project({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.main_text}>
        <Title font="Project" lineColor="black" color="black" />
      </div>

      {projectData.map((data) => {
        return (
          <div className={styles.lead}>
            <div className={styles.item}>
              <div className={styles.sum}>
                <img src={data.images} alt="sum" />
              </div>
              <div className={styles.link}>
                <div className={styles.text}>
                  <div>
                    <h3>{data.title}</h3>
                    <h5>{data.detail}</h5>
                  </div>
                  <div></div>
                </div>
                <div className={styles.link_to}>
                  <div>#Skills</div>
                  <div>#Skills</div>
                  <div>#Skills</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
