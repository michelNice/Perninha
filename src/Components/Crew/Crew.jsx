import React from 'react';
import './Crew.css';
import image1 from '../img/crew1.png'
import image2 from '../img/crew10.png'
import image3 from '../img/crew5.png'
import image4 from '../img/crew8.png'
import { useTranslation } from 'react-i18next';
const Parnership = () => {
    const {t} = useTranslation()
  return (
    <>
    <div className='parnership' id='crew'>
    <div className="starcontainer">
      <h2>{t('crews')}</h2>
      <div className="star-line">
        <hr className="line" />
        <i className="fa fa-users star-icon"></i>
        <hr className="line" />
      </div>
    </div>
    <div className="crews">
        <a href="https://www.instagram.com/ganggangrenacrew/?hl=en" target='_blank' rel="noopener noreferrer"><img src={image1} alt="About one"></img></a>
        <a href="https://and8.dance/en/group/mighty.zulu.kings.and.kweenz" target='_blank' rel="noopener noreferrer"><img className='img3' src={image2}  alt="About two"></img></a>
        <a href="https://www.killarockers.com/" target="_blank" rel="noopener noreferrer"><img src={image3} alt="About treee"></img></a>
        <a href="https://www.illabilities.com/" target='_blank' rel="noopener noreferrer"><img src={image4} alt="About four"></img></a>
      </div>
    </div>
   </>
  );
};

export default Parnership;
