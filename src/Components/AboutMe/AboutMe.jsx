import React from 'react';
import './AboutMe.css'; 
import i18n from '../../i18n';
import image1 from '../img/aboutmeImg1.jpg'
import image2 from '../img/aboutmeImg5.jpg'
import image3 from '../img/aboutmeImg3.jpg'
import  image4 from '../img/aboutmeImg4.jpg';
import { useTranslation } from 'react-i18next';
const AboutMe = () => {
  const { t } = useTranslation(); 
  return (
    <div className="main-conteiner" >
    <div className="starcontainer" >
      <h2 id='aboutme'>{t("about")}</h2>
      <div className="star-line">
        <hr className="line" />
        <i className="fa fa-star star-icon"></i>
        <hr className="line" />
      </div>
    </div>
        <div className="container">
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper">
            <img src={image1} alt="About me photo one" 
            />
          </div>
          <div className="imgWrapper">
            <img src={image2}alt="About me photo two" />
          </div>
          <div className="imgWrapper">
            <img src={image3} alt="About me photo tree" />
          </div>
          <div className="imgWrapper">
            <img src={image4} alt="About me photo four" />
          </div>
        </div>
      </div>
      <div className="contentRight">
        <div className="content">
          <h4>{t("resileH")}</h4>
          <h2>Bboy Perninha</h2>
          <p>{t("relise")}</p>
          <a target='_blank' href="https://www.killarockers.com/perninha">{t("buttonAbout")}</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
