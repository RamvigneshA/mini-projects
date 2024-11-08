import  { useContext, useEffect, useRef } from 'react';
import './follow.css';
import { refcontext } from './App';

function FollowLink() {
  const refA = useRef();
  const refSpan = useRef();
  const { secJokeRef } = useContext(refcontext);

  useEffect(() => {
    const a = refA.current.querySelectorAll('a');
    const highlight = refSpan.current;
    console.log(highlight);
   
  
    

    function highlightlink() {
      const linkCords = this.getBoundingClientRect();

      const coords = {
        width: linkCords.width,
        height: linkCords.height,
        left: linkCords.left + window.scrollX,
        top: linkCords.top + window.scrollY,
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height= `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    }
    a.forEach((a) => a.addEventListener('mouseenter', highlightlink));
  }, []);

  return (
    <section ref={secJokeRef}  className="follow"> 
      <span style={{position:'absolute'}} ref={refSpan} className='highlight'></span>
      <nav style={{ position: 'relative' }} ref={refA}>
        <p style={{fontSize:"60px",marginBottom:40}}>Joke Corner </p>
        <a style={{ fontSize: "4rem" }}>Why do Programmers prefer dark mode..??</a>
        <div>Hover above  Me for Question</div>
        <a style={{ fontSize: "4rem" }}>Because light attracts bugs!</a>
        <div>Answer</div>
      </nav>
    </section>
  );
}

export default FollowLink;
