import './Background.css';
import  video1 from '../img/hero.mp4';
import image1 from '../img/perninhaImg1.jpg'
import image2 from '../img/perninhaImg5.jpg'
import image3 from '../img/perninhaImg4.jpg'

const Background = ({playStatus,heroCount}) => {
  
    return (
      <>
        {playStatus ? (
          <video className="background fade-in" autoPlay loop>
            <source src={video1} type="video/mp4" />
          </video>
        ) : heroCount === 0 ? (
          <img src={image1} className="background fade-in" alt="" />
        ) : heroCount === 1 ? (
          <img src={image2} className="background fade-in" alt="" />
        ) : heroCount === 2 ? (
          <img src={image3} className="background fade-in" alt="" />
        ) : null}
        
        <div className="overlay"></div>
      </>
    );
  

}

export default Background
