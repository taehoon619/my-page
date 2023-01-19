import React from 'react';
import styles from './Skills.module.css';
import { MdDoneOutline } from 'react-icons/md';
import Title from '../Title/Title';

export default function Skills({ elementRef }) {
  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.main}>
        <Title font="Skills" lineColor="black" color="black" />
      </div>
      <div className={styles.skills}>
        <div className={styles.section}>
          <h1>FrontEnd</h1>
          <p className={styles.intro_text}>
            주로 React를 사용하여 앱을 만듭니다. <br />
            유저 경험과 디자인에 민감하며 유지보수성이 높은 코드를 작성하기 위해
            노력합니다.
          </p>
        </div>
        <div className={styles.item}>
          <h2>
            <MdDoneOutline />
            <span>React</span>
          </h2>
          <p>
            생태계가 넓고, 다양한 라이브러리를 사용할 수 있는 React를 주로
            사용합니다. <br /> 디자인 패턴 및 최적화에 관심이 많습니다.
          </p>
          <h2>
            <MdDoneOutline />
            <span>Javascript</span>
          </h2>
          <p>
            ES6+ JavaScript 문법에 능숙하며, ECMAScript의 변화를 꾸준히 살피고
            학습합니다.
            <br />
            컴파일 단계에서 오류를 잡아주는 TypeScript 사용을 지향합니다.
          </p>
          <h2>
            <MdDoneOutline />
            <span>JQuery</span>
          </h2>
          <p>
            ES6+ JavaScript 문법에 능숙하며, ECMAScript의 변화를 꾸준히 살피고
            학습합니다.
            <br />
            컴파일 단계에서 오류를 잡아주는 TypeScript 사용을 지향합니다.
          </p>
        </div>
        <div className={styles.section}>
          <h1>BackEnd</h1>
          <p className={styles.intro_text}>
            간단한 웹 서버 구축 및 서버리스 서비스 경험이 있습니다.
          </p>
        </div>
        <div className={styles.item}>
          <h2>
            <MdDoneOutline />
            <span>JQuery</span>
          </h2>
          <p>
            생태계가 넓고, 다양한 라이브러리를 사용할 수 있는 React를 주로
            사용합니다. <br /> 디자인 패턴 및 최적화에 관심이 많습니다.
          </p>
          <h2>
            <MdDoneOutline />
            <span>JQuery</span>
          </h2>
          <p>
            ES6+ JavaScript 문법에 능숙하며, ECMAScript의 변화를 꾸준히 살피고
            학습합니다.
            <br />
            컴파일 단계에서 오류를 잡아주는 TypeScript 사용을 지향합니다.
          </p>
        </div>
        <div className={styles.section}>
          <h1>etc</h1>
          <p className={styles.intro_text}>
            간단한 웹 서버 구축 및 서버리스 서비스 경험이 있습니다.
          </p>
        </div>
        <div className={styles.item}>
          <h2>
            <MdDoneOutline />
            <span>JQuery</span>
          </h2>
          <p>
            GIT을 활용한 워크 플로우에 익숙합니다. <br />
            Commit convention을 통한 협업 경험이 있고, Merge Conflict 처리에
            익숙합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

// 표로 만들어서 내용적기 ?
// 단순 아이콘 호버 ?
