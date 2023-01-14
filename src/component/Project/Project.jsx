import React from 'react';
import styles from './Project.module.css';
import todoList from '../../img/todoList_darkmode.png';

export default function Project({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.mainText}>
        <div className={styles.main}>Project</div>
      </div>
      <div className={styles.lead}>
        <div className={styles.item}>
          <div className={styles.sum}>
            <img src={todoList} alt="sum" width="60%" height="50%" />
          </div>
          <div className={styles.text}>
            <div>
              <h3>TodoList</h3>
              <h5>안녕하세요</h5>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
