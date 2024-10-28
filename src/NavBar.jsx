import { useEffect, useRef } from 'react';
import './navbar.css';
import juice from './image.png';
function NavBar() {
  const refNav = useRef();
  
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
 
  return (
    <section>
      <img src={juice} alt="hgh" />
      <ul style={{ zIndex: 1 }} ref={refNav} className="navbar">
        <li className="active">hey THERE!!!</li>
        <li>TEXT-VOICE</li>
        <li>voiceAI</li>
        <li >Flex-Panel</li>
        <li>Chaotic Ghost</li>
        <li>Joke corner </li>
      </ul>
    </section>
  );
}

export default NavBar;
