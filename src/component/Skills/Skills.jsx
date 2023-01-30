import React from 'react';
import styles from './Skills.module.css';
import { MdDoneOutline } from 'react-icons/md';
import { BsBootstrapFill, BsGithub, BsSlack } from 'react-icons/bs';
import { SiTailwindcss, SiNotion, SiJquery, SiNetlify } from 'react-icons/si';
import { IoLogoReact, IoLogoJavascript } from 'react-icons/io5';
import Title from '../Title/Title';

export default function Skills({ elementRef }) {
  return (
    <article className={styles.container} ref={elementRef}>
      <Title font="Skills" lineColor="black" color="black" />
      <div className={styles.contentWrap}>
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <h1 className={styles.intro}>FrontEnd</h1>
            <p className={styles.intro_text}>
              주로 React를 사용하여 앱을 만듭니다. <br />
              유저 경험과 디자인에 민감하며 유지보수성이 높은 코드를 작성하기
              위해 노력합니다.
            </p>
          </div>
          <div className={styles.itemWrap}>
            <h2 className={styles.itemTitle}>
              <IoLogoReact />
              <span>React</span>
            </h2>
            <p>
              생태계가 넓고, 다양한 라이브러리를 사용할 수 있는 React를 주로
              사용합니다. <br /> 디자인 패턴 및 최적화에 관심이 많습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <IoLogoJavascript />
              <span>Javascript</span>
            </h2>
            <p>
              ES6+ JavaScript 문법에 능숙하며, ECMAScript의 변화를 꾸준히 살피고
              학습합니다.
              <br />
              컴파일 단계에서 오류를 잡아주는 TypeScript 사용을 지향합니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiJquery />
              <span>JQuery</span>
            </h2>
            <p>
            제이쿼리를 이용하면 문서 객체 모델(DOM)과 이벤트에 관한 처리를 손쉽게 구현할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <BsBootstrapFill />
              <span>Bootstrap</span>
            </h2>
            <p>
              웹표준 및 웹접근성을 준수하여 웹페이지를 제작할 수 있으며, CSS를
              활용한 애니메이션 구현을 할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiTailwindcss />
              <span>TailwindCss</span>
            </h2>
            <p>
            TailwindCss를 통해서 빠르고 일관성있는 디자인 시스템을 적용합니다.           
            </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <h1 className={styles.intro}>BackEnd</h1>
            <p className={styles.intro_text}>
              간단한 웹 서버 구축 및 서버리스 서비스 경험이 있습니다.
            </p>
          </div>
          <div className={styles.itemWrap}>
            <h2 className={styles.itemTitle}>
              <MdDoneOutline />
              <span>JQuery</span>
            </h2>
            <p>
            </p>
            <h2 className={styles.itemTitle}>
              <MdDoneOutline />
              <span>JQuery</span>
            </h2>
            <p>
            </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <h1 className={styles.intro}>etc</h1>
            <p className={styles.intro_text}>
              간단한 웹 서버 구축 및 서버리스 서비스 경험이 있습니다.
            </p>
          </div>
          <div className={styles.itemWrap}>
            <h2 className={styles.itemTitle}>
              <BsGithub />
              <span>Git</span>
            </h2>
            <p>
              GIT을 활용한 워크 플로우에 익숙합니다. <br />
              Commit convention을 통한 협업 경험이 있고, Merge Conflict 처리에
              익숙합니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiNetlify />
              <span>Netlify</span>
            </h2>
            <p>
              Netlify를 통해서 빌드, 배포, 호스팅 할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiNotion />
              <span>Notion</span>
            </h2>
            <p>
              Notion을 통해서 문서 작성, 작업 관리, 개인및 공동작업을 위한 페이지를 사용 할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <BsSlack />
              <span>Slack</span>
            </h2>
            <p>
              GIT을 활용한 워크 플로우에 익숙합니다. <br />
              Commit convention을 통한 협업 경험이 있고, Merge Conflict 처리에
              익숙합니다.
            </p>
          </div>
        </div> 
      </div>
    </article>
  );
}

// 표로 만들어서 내용적기 ?
// 단순 아이콘 호버 ?
