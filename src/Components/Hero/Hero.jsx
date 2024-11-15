import React from 'react'
import './Hero.css';
import play_icon from '../img/play_icon.png'
import pause_icon from '../img/pause_icon.png'
const Hero = ({setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
    <div className='hero-dot-play'>
        <ul className="hero-dots">
            <li onClick={()=> setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
            <li onClick={()=> setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
            <li onClick={()=> setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
        </ul>
        <div className='hero-play'>
            <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
            <p>See the video</p>
        </div>
    </div>

  </div>
)
  
}

export default Hero
