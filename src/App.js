import './css/App.css';
import {useEffect, useState} from 'react';
import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Crew from './Components/Crew/Crew.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Gallery from './Components/Gallery/Gallery.jsx';
import Parnership from './Components/Parnership/Parnership.jsx';


function App() {
  const [heroCount,setHeroCount] = useState(1);
  const [playStatus,setPlayStatus] = useState(false);
  
  useEffect(()=>{
    setInterval(() => {
        setHeroCount((count)=>{return count === 2 ? 0 : count + 1})
    },10000);
  }, [])
  
  return (
    <div id='home'>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        
        <Navbar />

        <Hero 
            setPlayStatus={setPlayStatus}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
        />
        <AboutMe />

        <Crew />
        
        <Parnership />

         
       <Gallery />

        <Contact />

    </div>
   
  )
}

export default App;
