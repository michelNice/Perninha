import '../src/css/App.css';
import react ,{useEffect, useState} from 'react';
import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';

function App() {
  
  let heroData = [
    
    {text1:"No excuse",text2:"No limits"},
    {text1:"Indulge",text2:"your passtion"},
    {text1:"Give into",text2:"your passition"},
    
  ]
  
  const [heroCount,setHeroCount] = useState(1);
  const [playStatus,setPlayStatus] = useState(false);
  /*
  useEffect(()=>{
    setInterval(() => {
        setHeroCount((count)=>{return count === 2 ? 0 : count + 1})
    },7000);
  }, [])
  */
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>

        <Navbar />

        <Hero 
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
        />
    </div>
  )
}

export default App;
