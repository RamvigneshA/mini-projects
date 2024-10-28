import { createContext, useRef } from 'react';
import ChaoticMouse from './ChaoticMouse';
import FlexPanel from './flexPanel/FlexPanel';
import FollowLink from './FollowLink';
import NavBar from './NavBar';
// import Secret from './secret';
import VoiceAI from './VoiceAI';
import Voicenator from './Voicenator';

export const refcontext = createContext();
function App() {
  const secTextVoiceRef = useRef(null);
  const secVoiceAIRef = useRef(null);
  const secFlexPanelRef = useRef(null);
  const secGhostRef = useRef(null);
  const secJokeRef = useRef(null);

  return (
    <>
      <refcontext.Provider value={{ secTextVoiceRef, secVoiceAIRef, secFlexPanelRef, secGhostRef, secJokeRef }}>
      <NavBar />
      <div>
      <Voicenator />
      <VoiceAI/>
      <FlexPanel />
      <ChaoticMouse />
        <FollowLink />
        </div>
        </refcontext.Provider>
    </>
  );
}

export default App;
