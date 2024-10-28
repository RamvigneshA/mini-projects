import { useContext, useEffect, useState } from 'react';
import './voicenator.css';
import { refcontext } from './App';

function Voicenator() {
  const [voices, setVoice] = useState([]);
  const {secTextVoiceRef } = useContext(refcontext);

  const [TextValue, setTextValue] = useState(
    'Hi! I am Voicenator🇮🇳, I can convert text to voice.'
  );
  const msg = new SpeechSynthesisUtterance();

  useEffect(() => {
    speechSynthesis.addEventListener('voiceschanged', poptVoices);
    
      function poptVoices() {
        setVoice(() =>
          speechSynthesis.getVoices().filter((voice) => voice.lang.includes('en'))
        );
      }
  }, []);

  // const options = document.querySelectorAll('[type="range"], [name="text"]');

  function change() {
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  }
  function setselectedVoice(e) {
    msg.voice = voices.find((voice) => voice.name === e.target.value);
    change();
  }

  const stop = () => {
    speechSynthesis.cancel();
  };
  const speak = () => {
    msg.text = TextValue;
    speechSynthesis.speak(msg);
  };

  const modify = (e) => {
    msg[e.target.name] = e.target.value;
    change();
  };

  return (
    <>
      <section ref={secTextVoiceRef} className='voicenatorSec'>
      <div className="voicenator">
        <h1>
          <em>Voicenator</em>
        </h1>
        <select name="voice" id="voices" onChange={setselectedVoice}>
          <option value="">Select A Voice</option>
          {voices.map((voice, index) => (
            <option key={index} value={voice.name}>
              {voice.name} {voice.lang}
            </option>
          ))}
        </select>
        <label htmlFor="rate">Rate:</label>

        <input
          className="slider"
          onChange={modify}
          type="range"
          name="rate"
          min="0"
          max="2"
         defaultValue={1}
          step="0.1"
        />
        <label htmlFor="pitch">Pitch:</label>
        <input
          className="slider"
          onChange={modify}
          type="range"
          name="pitch"
        
          min="0"
          max="2"
          defaultValue={1}
          step="0.1"
        />

        <textarea
          onChange={(e) => setTextValue(e.target.value)}
          name="text"
          value={TextValue}
          cols="30"
          rows="11"
        >
          {' '}
        </textarea>
        <div className="buttons">
          <button onClick={stop}>Stop</button>
          <button onClick={speak}>Speak</button>
        </div>
        </div>
        </section>
    </>
  );
}

export default Voicenator;
