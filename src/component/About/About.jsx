import React from 'react';
import Title from '../Title/Title';
import styles from './About.module.css';

export default function About({ elementRef }) {
  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.main}>
        <Title font="About Me" lineColor="black" color="black" />
      </div>
      <div className={styles.text_container}>
        <div className={styles.intro}>안녕하세요 개발자 이태훈입니다.</div>
        <p className={styles.intro_text}>
          유저 경험과 디자인에 민감하고 새로운 기술과 트렌드를 익히고 도전하는
          것을 좋아합니다. <br />
          커뮤니케이션의 중요성을 믿고, 어제보다 나은 사람이 되는 것을 목표로
          하고 끊임없이 공부합니다.
        </p>
        <div className={styles.text}>
          <div className={styles.title}>도전적인 정신을 가진 개발자</div>
          <p>
            새로운 것에 거부감이 없고 끊임없이 탐구하는 제 장점은 급변하는
            프론트엔드 기술 분야에서 빛을 발했습니다. 꾸준히 배우고 사용해본다는
            것은 중요하다 생각하고, 더 나은 방법이 있지 않을까 항상 고민합니다.
          </p>
          <div className={styles.title}>어떤 개발자가 되고 싶은가요?</div>
          <p>
            세상과 소통하는 개발자가 되고 싶습니다. 프론트엔드 개발자의 주요
            덕목 중 하나는 ‘소통’이라고 생각합니다. 디자이너와 백엔드 개발자의
            서로 다른 포지션에서 트러블이 발생할 수 있습니다. 이 점을 프론트엔드
            개발자가 중간에서 해소해주는 역할을 해야한다고 생각합니다. 더 나아가
            세상에서 나오는 불만이라는 피드백을 취합하여 반영할 수 있는 개발자가
            되고 싶습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
