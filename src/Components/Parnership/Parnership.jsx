import React from 'react';
import './Parnership.css';
import logo1 from '../img/Logo-Growth-Supplements.png'
import logo2 from '../img/logo-green-removebg-preview.png'
import logo3 from '../img/king.png'

const Parnership = () => {
  return (
    <div className='conteiner-parnership'>
        <div className="parnershipp">
        <div className='partnership-growth'>
    <a href=""><img src={logo1} alt=""/></a>
    <p>Use o cupom 'Perninha' na Growth.</p>
</div>

        <a href="#"><img src={logo2} alt=""/></a>
    </div>
    <hr></hr>
  </div>
  );
};

export default Parnership;
