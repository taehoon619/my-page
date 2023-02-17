import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ modalClick }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.modalBox}>
        <div className={styles.contentWrap}>
          <h3 className={styles.qna}>Q n A</h3>
          <ul className={styles.textWrap}>
            <li className={styles.textBox}>
              <h2 className={styles.title}>Q1. 자기소개</h2>
              <p className={styles.text}>
                안녕하세요 프론트 엔드 분야를 공부하고 있는 이태훈입니다.
                <br />
                <br />
                <b>
                  무엇인가를 만드는 일, 디자인을 통해서 더 많은 사람들에게
                  편안함을 준다는 것
                </b>
                이 매력적으로 다가왔습니다.
                <br />
                <br />
                제가 가진 기술적인 역량으로는 HTML, CSS, JavaScript와 관련
                라이브러리 및 프레임워크인 React를 다룰 수 있으며 Typescritp와
                next.js를 공부하고 있습니다.
                <br />
                <br />
                저는 끊임없이 새로운 기술과 트렌드에 관심을 가지고, 계속해서
                개발 역량을 향상시켜 나가고 있습니다.
                <br />
                <br />
                <b>
                  새로운 도전과 함께 성장할 수 있는 기회가 있다면, 적극적으로
                  참여하고 기여
                </b>
                하고 싶습니다.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>Q2. 내가 개발자가 되기로 한 이유</h2>
              <p className={styles.text}>
                <b>
                  무엇인가를 만드는 일, 디자인을 통해서 더 많은 사람들에게
                  편안함을 준다는 것
                </b>
                이 매력적으로 다가왔습니다.
                <br />
                <br />
                저는 하고 싶은 일을 찾지 못했고 많은 시간을 방황했습니다.
                무엇이든 해야 할 거리가 필요했고 그러다 친구의 추천으로 개발에
                대해서 알게 되었고 컴퓨터를 사용하는 것을 좋아했던 저는 큰
                흥미를 느꼈고 국비 프로그램으로 프론트엔드 수업을 들었습니다.
                <br />
                <br />
                Html부터 React까지 공부하며 어려움도 있었지만 문제를 하나씩
                해결해 나가는 과정에서 큰 성취감을 느꼈습니다. 어려운 상황을
                극복해나가며 아직 모르는 것이 산더미 같은 상황에서 더 많은 것을
                알고 싶다고 생각했습니다.
                <br />
                <br />
                개발자가 되어서{" "}
                <b>
                  내 손으로 무언가를 개발할 수 있고, 그 범위가 무한하다는 것이
                  너무 멋진 일{" "}
                </b>
                이라고 생각합니다.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>Q3. 개발자로서 목표</h2>
              <p className={styles.text}>
                내가{" "}
                <b>
                  좋아하는 제품을 만들고, 그를 통해서 사용자들의 더 나은 삶에
                  기여하는 개발자
                </b>
                가 되고 싶습니다.
                <br />
                <br />
                내 손으로 무언가를 개발할 수 있고, 무한한 가능성을 가지고 있다는
                것은 멋진 일입니다.
                <br />
                <br />
                프론트엔드 개발자로서 공부하지만 다양한 분야에서 개발을 하고
                싶다는 열망이 가득합니다. 개발을 공부하면서 느낀 것은 항상
                새로운 것을 받아들이고 익숙해져야 한다는 것입니다. 내가 하고
                싶은 것을 할 수 있을 때까지{" "}
                <b>새로운 것에 대해 호기심과 도전의식을 가지고 공부하고 성장</b>
                해야 한다는 것입니다.
                <br />
                <br />
                사용자들에게 더 나은 서비스를 제공하기 위한 필수 덕목은
                소통이라고 생각합니다. 사용자와의 대화 뿐만 아니라{" "}
                <b>
                  팀원들과 협업하려는 마음, 배려와 이해를 바탕으로 한 의사소통
                </b>
                이라고 생각합니다.
                <br />
                <br />더 나은 제품을 만들고 더 나은 삶에 기여하기 위해{" "}
                <b>기술적 성장과 소통 능력의 개발을 최우선</b>으로 하는 개발자가
                되고 싶습니다.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.modalBtn} onClick={modalClick}>
            닫기
          </button>
        </div>
      </div>
    </section>
  );
}
