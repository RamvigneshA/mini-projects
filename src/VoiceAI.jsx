import  { useEffect, useRef,  } from 'react';
import './voiceai.css';

window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;


function VoiceAI() {
  const wordsRef = useRef(null);

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
      <section  className='sectionVoiceAI' >
      <header>
        <h1>VoiceAI</h1>
        <span>Your Voice, Your Text</span>
      </header>
        <div className="words" ref={wordsRef} contentEditable></div>
        <button onClick={start}>start</button>
        <button onClick={sttop}>stop</button>
      </section>
      </>
  );
}

export default VoiceAI;
