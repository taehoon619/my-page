import { useRef } from "react";

function useMoveScroll(name) {
  const element = useRef(null);
  const onMoveToElement = () => {
    let scrollY =
      element.current.getBoundingClientRect().top - 60 + window.pageYOffset;
    window.scrollTo({
      left: 0,
      top: scrollY,
      behavior: "smooth",
    });
  };
  return { element, onMoveToElement, name };
}

export default useMoveScroll;
