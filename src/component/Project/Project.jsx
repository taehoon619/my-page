import React, { useState } from "react";
import styles from "./Project.module.css";
import Title from "../ui/Title/Title";
import { projectData } from "../../data/projectData";
import FullScreenDialog from "../FullScreenDialog/FullScreenDialog";

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
          <section className={styles.itemWrap} key={data.id}>
            <div className={styles.item}>
              <div className={styles.thumbnail}>
                <img
                  className={styles.projectImg}
                  src={data.images}
                  alt="thumbnail"
                />
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
                    <div className={styles.projectText}>Frontend</div>
                    <div className={styles.projectDetail}>{data.frontend}</div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>Github</div>
                    <div className={styles.projectDetail}>
                      <a href={data.github}>{data.github}</a>
                    </div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>URL</div>
                    <div className={styles.projectDetail}>
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.url}
                      </a>
                    </div>
                  </li>
                  <li className={styles.projectTextWrap}>
                    <div className={styles.projectText}>Deployment</div>
                    <div className={styles.projectDetail}>
                      {data.deployment}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
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
