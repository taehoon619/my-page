import Header from './component/Header/Header';
import Main from './component/Main/Main';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import useMoveScroll from './Hooks/useMoveScroll';

function App() {
  const goodsTabs = {
    0: useMoveScroll('About'),
    1: useMoveScroll('Skills'),
    2: useMoveScroll('Project'),
    3: useMoveScroll('Contact'),
    length: 4,
  };
  return (
    <div>
      <Header goodsTabs={goodsTabs} />
      <Main />
      <About elementRef={goodsTabs[0].element} />
      <Skills elementRef={goodsTabs[1].element} />
      <Project elementRef={goodsTabs[2].element} />
      <Contact elementRef={goodsTabs[3].element} />
      <Footer/>
    </div>
  );
}

export default App;
