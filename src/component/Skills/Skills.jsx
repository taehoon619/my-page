import React from "react";
import styles from "./Skills.module.css";
import { BsGithub, BsSlack } from "react-icons/bs";
import { SiHtml5, SiCss3, SiNotion, SiNetlify } from "react-icons/si";
import { IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import Title from "../ui/Title/Title";

export default function Skills({ elementRef }) {
  return (
    <article className={styles.container} ref={elementRef}>
      <Title font="Skills" lineColor="black" color="black" />
      <div className={styles.contentWrap}>
        <section className={styles.wrapper}>
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
              <SiHtml5 />
              <span>HTML</span>
            </h2>
            <p className={styles.text}>
              웹 표준 및 웹 접근성을 준수하여 웹페이지를 제작할 수 있으며,
              <br />
              시멘틱 마크업을 준수하기 위해 생각하고 노력하고 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiCss3 />
              <span>CSS</span>
            </h2>
            <p className={styles.text}>
              CSS를 활용해 효과적으로 레이아웃 할 수 있으며
              <br />
              기본적인 디자인을 할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <IoLogoJavascript />
              <span>Javascript</span>
            </h2>
            <p className={styles.text}>
              ES6+ JavaScript 문법에 능숙하며, ECMAScript의 변화를 꾸준히 살피고
              학습합니다.
            </p>
            <h2 className={styles.itemTitle}>
              <IoLogoReact />
              <span>React</span>
            </h2>
            <p className={styles.text}>
              생태계가 넓고, 다양한 라이브러리를 사용할 수 있는 React를 주로
              사용합니다. <br /> 디자인 패턴 및 최적화에 관심이 많습니다.
            </p>
          </div>
        </section>
        <section className={styles.wrapper}>
          <div className={styles.section}>
            <h1 className={styles.intro}>Tools</h1>
            <p className={styles.intro_text}>
              간단한 웹 서버 구축 및 서버리스 서비스 경험이 있습니다.
            </p>
          </div>
          <div className={styles.itemWrap}>
            <h2 className={styles.itemTitle}>
              <BsGithub />
              <span>Git</span>
            </h2>
            <p className={styles.text}>
              GIT을 활용한 워크 플로우에 익숙합니다. <br />
              Commit convention을 통한 협업 경험이 있고, Merge Conflict 처리에
              익숙합니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiNetlify />
              <span>Netlify</span>
            </h2>
            <p className={styles.text}>
              Netlify를 통해서 빌드, 배포, 호스팅 할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <SiNotion />
              <span>Notion</span>
            </h2>
            <p className={styles.text}>
              Notion을 통해서 문서 작성, 작업 관리, 개인및 공동작업을 위한
              페이지를 사용 할 수 있습니다.
            </p>
            <h2 className={styles.itemTitle}>
              <BsSlack />
              <span>Slack</span>
            </h2>
            <p className={styles.text}>
              GIT을 활용한 워크 플로우에 익숙합니다. <br />
              Commit convention을 통한 협업 경험이 있고, Merge Conflict 처리에
              익숙합니다.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}

// 표로 만들어서 내용적기 ?
// 단순 아이콘 호버 ?
