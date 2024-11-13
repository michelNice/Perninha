import React from 'react';
import './AboutMe.css'; // Make sure to import your styles
import image1 from '../img/aboutmeImg1.jpg'
import image2 from '../img/aboutmeImg2.jpg'
import image3 from '../img/aboutmeImg3.jpg'
import  image4 from '../img/aboutmeImg4.jpg';

const AboutMe = () => {
  return (
    <div className="main-conteiner">
       <div className="starcontainer">
      <h2>About me</h2>
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
          <h4>Welcome my world</h4>
          <h2>Bboy Perninha</h2>
          <p>B-Boy Perninha is a Brazilian breakdancer known for his high-energy footwork and dynamic, creative style. Hailing from Brazil, Perninha has become a significant figure in the breaking scene, with a reputation for his fast footwork, complex patterns, and unique moves. He has competed in various international battles, showcasing his skills in competitions like Red Bull BC One and other notable events.</p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
