import React from 'react';
import './Parnership.css';
import logo1 from '../img/Logo-Growth-Supplements.png'
import logo2 from '../img/logo-green-removebg-preview.png'
const Parnership = () => {
  return (
    <>
      <div className="conteiner-parnership">
          <div className="parneshipImgs">
            <a href="https://www.gsuplementos.com.br/" target="_blank" rel="noopener noreferrer"><img src={logo1} alt="" /></a>
            <a href="https://www.greenpanda.com" target="_blank" rel="noopener noreferrer"><img src={logo2} alt="" /></a>
              <p>Use o cupom <strong>'Perninha'</strong>na Growth.</p>
          </div>
      </div>
      <hr />
    </>
  );
};

export default Parnership;
