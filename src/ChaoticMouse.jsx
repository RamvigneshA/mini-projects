import  { useEffect, useRef } from 'react'
import './chaotic.css'
function ChaoticMouse() {
  const bref = useRef();
  const tref = useRef();

  useEffect(() => {
    const body = bref.current;
const text = tref.current;
  
  

    function move(e) {
const width = body.offsetWidth;
const height = body.offsetHeight;
let x = e.offsetX;
      let y = e.offsetY;
      
      if(this!==e.target){
        x = x+(e.target.offsetLeft);
        y = y +(e.target.offsetTop);
      }
let finalX = (x/width)*200;
let finalY = (y/height)*200;
x = (finalX-100);
y = (finalY-100);

text.style.textShadow = `${x}px ${y}px hotpink, ${x}px ${-y}px green, ${-x}px ${y}px pink, ${-x}px ${-y}px purple, ${y}px ${x}px orange, ${y}px ${-x}px yellow, ${-y}px ${x}px cyan, ${-y}px ${-x}px blue`;
}

body.addEventListener("mousemove", move);
},[])



  return (
    
    <div style={{position:'relative'}} className='bodyy' ref={bref} >
      <h1 style={{position:'absolute'}} className="txt" ref={tref} >
      👻
      </h1>

      </div>
  )
}

export default ChaoticMouse
