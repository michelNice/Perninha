import React, { useState } from 'react';
import './Navbar.css'; 


const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [chosenLang, setChosenLang] = useState("en"); // Default selected language

  const handleLangClick = (language) => {
    if (open) {
      if (chosenLang !== language) {
        setChosenLang(language);
        console.log(`${language} chosen`);
        // Add additional logic here for changing language
      }
      setOpen(false); 
    } else {
      setOpen(true); 
    }
  };

  return (
    <div className={`chooseLang ${open ? "open" : ""}`}>
      <div className='columns'>
        <span
          id="pt-lang"
          className={`lang pt-lang ${chosenLang === "pt" ? "chosen" : ""}`}
          onClick={() => handleLangClick("pt")}
        ></span>
        <span
          id="en-lang"
          className={`lang en-lang ${chosenLang === "en" ? "chosen" : ""}`}
          onClick={() => handleLangClick("en")}
        ></span>
        <span
          id="es-lang"
          className={`lang es-lang ${chosenLang === "es" ? "chosen" : ""}`}
          onClick={() => handleLangClick("es")}
        ></span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
