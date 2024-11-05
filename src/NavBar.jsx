import { useContext, useEffect, useRef } from 'react';
import './navbar.css';
import { Typing } from './typing';

import juice from './image.png';
import { refcontext } from './App';
function NavBar() {
  const refNav = useRef();
  const {secTextVoiceRef, secVoiceAIRef, secFlexPanelRef, secGhostRef, secJokeRef } = useContext(refcontext);
  useEffect(() => {
    const nav = refNav.current;
    const topNav = nav.offsetTop;

    function fixNav() {
      // console.log(window.scrollY);
      // console.log(topNav);
      if (window.scrollY >= topNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('sticky');
      } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('sticky');
      }
    }

    window.addEventListener('scroll', fixNav);
  }, []);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section>
      <Typing/>
      <ul style={{ zIndex: 1 }} ref={refNav} className="navbar">
        <li style={{fontSize:50}} className="active">☕</li>
        <li onClick={() => scrollToSection(secTextVoiceRef)}>TEXT-VOICE</li>
        <li onClick={() => scrollToSection(secVoiceAIRef)}>voiceAI</li>
        <li onClick={() => scrollToSection(secFlexPanelRef)}>Flex-Panel</li>
        <li onClick={() => scrollToSection(secGhostRef)}>Chaotic Ghost</li>
        <li onClick={() => scrollToSection(secJokeRef)}>Joke corner </li>
      </ul>
    </section>
  );
}

export default NavBar;
