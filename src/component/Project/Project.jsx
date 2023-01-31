import React, { useState } from 'react';
import styles from './Project.module.css';
import Title from '../Title/Title';
import { projectData } from '../../data/projectData';
import FullScreenDialog from '../FullScreenDialog/FullScreenDialog';

export default function Project({ elementRef }) {
  const [modalOn, setModalOn] = useState(false);
  const [projectNum, setProjectNum] = useState(0);

  const handleModal = (num) => {
    if (num) {
      setProjectNum(num);
    }
    setModalOn((prev) => !prev);
  };

  return (
    <article ref={elementRef} className={styles.container}>
      <Title font="Project" lineColor="#000" color="#000" />

      {projectData.map((data) => {
        return (
          <div className={styles.itemWrap} key={data.id}>
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
                  <button
                    className={styles.btn}
                    onClick={() => handleModal(data.id)}
                  >
                    자세히 보기
                  </button>
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
                      <a href={data.url} target='_blank' rel='noopener noreferrer'>{data.url}</a>
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
      {modalOn && (
        <FullScreenDialog
          handleModal={handleModal}
          project={projectData[projectNum].readme}
          num={projectNum}
        />
      )}
    </article>
  );
}
