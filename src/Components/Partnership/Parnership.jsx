import React from 'react';
import './Parnership.css';
import image1 from '../img/crew1.png'
import image2 from '../img/crew4 (2).png'
import image3 from '../img/crew5.png'
import image4 from '../img/crew8.png'
const Parnership = () => {
  return (
    <div className='parnership'>
    <div className="starcontainer">
      <h2>Crews</h2>
      <div className="star-line">
        <hr className="line" />
        <i className="fa fa-handshake star-icon"></i>
        <i class="fa fa-users star-icon" aria-hidden="true"></i>
        <hr className="line" />
      </div>
    </div>
    <div className="crews">
        
        <img src={image1} alt="About me photo one"></img>
        <img src={image2} alt="About me photo one"></img>
        <img src={image3} alt="About me photo one"></img>
        <img src={image4} alt="About me photo one"></img>
    </div>
   
    </div>
  );
};

export default Parnership;
