import cat from './cat.png';
import dolfin from './dolfin.png';
import giraff from './giraff.png';
import avatar from './avatar.png';
import wolf from './wolf.png';
import './flexPanel.css';
import { useContext } from 'react';
import { refcontext } from '../App';
const FlexPanel = () => {
  const {secFlexPanelRef} = useContext(refcontext);

  return (
    <section ref={secFlexPanelRef} className='flexPanelSection'>
      <div className="panels-container">
        <div className="panel" style={{ backgroundImage: `url(${wolf})` }}>
          <p>Hey</p>
          <p style={{ fontSize: '1.8rem' }}>Lets</p>
          <p>Dance</p>
        </div>
        <div className="panel" style={{ backgroundImage: `url(${avatar})` }}>
          <p>Give</p>
          <p style={{ fontSize: '1.8rem' }}>Take</p>
          <p>Recieve</p>
        </div>
        <div className="panel" style={{ backgroundImage: `url(${cat})` }}>
          <p>Experince</p>
          <p style={{ fontSize: '1.8rem' }}>It</p>
          <p>today</p>
        </div>
        <div className="panel" style={{ backgroundImage: `url(${dolfin})` }}>
          <p>Give</p>
          <p style={{ fontSize: '1.8rem' }}>All</p>
          <p style={{ fontSize: '0.9rem' }}>you can</p>
        </div>
        <div className="panel " style={{ backgroundImage: `url(${giraff})` }}>
          <p>Life</p>
          <p style={{ fontSize: '1.8rem' }}>In</p>
          <p>MOTION</p>
        </div>
      </div>
    </section>
  );
};

export default FlexPanel;
