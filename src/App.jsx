import ChaoticMouse from './ChaoticMouse';
import FlexPanel from './flexPanel/FlexPanel';
import FollowLink from './FollowLink';
import NavBar from './NavBar';
// import Secret from './secret';
import VoiceAI from './VoiceAI';
import Voicenator from './Voicenator';
function App() {
  return (
    <>
      <NavBar />
      <div>
      <Voicenator />
      <VoiceAI/>
      <FlexPanel />
      <ChaoticMouse />
        <FollowLink />
        </div>
    </>
  );
}

export default App;
