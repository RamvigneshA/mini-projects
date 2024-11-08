import  { useContext, useEffect, useRef,  } from 'react';
import './voiceai.css';
import { refcontext } from './App';
window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;


function VoiceAI() {
  const wordsRef = useRef(null);
  const {secVoiceAIRef } = useContext(refcontext);

  useEffect(() => {

    let p = document.createElement('p');
    wordsRef.current.appendChild(p);

    recognition.addEventListener('result', (event) => {
      const transcripts = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

      p.textContent = transcripts;

      if (event.results[0].isFinal) {
        p = document.createElement('p');
        wordsRef.current.appendChild(p);
      }
    });
  }, []);
  
  function start() {
    recognition.addEventListener('end', recognition.start);
    recognition.start();
  
  }
  function sttop() {
    recognition.removeEventListener('end', recognition.start);
    recognition.stop();
  
  }

  return (
    <>
      <section ref={secVoiceAIRef} className='sectionVoiceAI' >
      <div>
        <h1 style={{fontSize:50}}>VoiceAI</h1>
        <span>Your Voice, Your Text</span>
      </div>
        <div className="words" ref={wordsRef} contentEditable></div>
        <button onClick={start}>start</button>
        <button onClick={sttop}>stop</button>
      </section>
      </>
  );
}

export default VoiceAI;
