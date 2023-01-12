import Header from './component/Header/Header';
import Main from './component/Main/Main';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import useMoveScroll from './Hooks/useMoveScroll';

function App() {
  const goodsTabs = {
    0: useMoveScroll('Main'),
    1: useMoveScroll('About'),
    2: useMoveScroll('Skills'),
    3: useMoveScroll('Project'),
    4: useMoveScroll('Contact'),
    length: 5,
  };
  return (
    <div>
      <Header goodsTabs={goodsTabs} />
      <Main elementRef={goodsTabs[0].element} />
      <About elementRef={goodsTabs[1].element} />
      <Skills elementRef={goodsTabs[2].element} />
      <Project elementRef={goodsTabs[3].element} />
      <Contact elementRef={goodsTabs[4].element} />
    </div>
  );
}

export default App;
