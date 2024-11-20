import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en-US");

  const translations = {
    "pt-BR": {
      navMenu: ["Home", "sobre mim", "Galleria", "contato"],
      title:
        "Derek, um b-boy de Olinda, Pernambuco, conquistou triunfantemente a vitória em um evento local. Com ampla experiência em workshops, ele viajou por vários estados, mostrando suas habilidades desde 2012. Sua paixão por breaking é igualada apenas por sua dedicação ao ofício, pois ele constantemente busca oportunidades para aprender e crescer. Derek colaborou com vários artistas, misturando estilos e influências para criar uma assinatura de performance única. Conhecido por sua criatividade e destreza técnica, ele inspira dançarinos mais jovens enquanto participa de eventos e competições comunitárias. Sempre ansioso para compartilhar seu conhecimento, Derek organiza workshops que capacitam outros a se expressarem por meio da dança.",
      sections: ["SOBRE MIM", "GALLERIA", "CONTATO"],
      form: {
        name: "Nome",
        placeholderName: "Nome",
        lastname: "Sobrenome",
        placeholderLastname: "Sobrenome",
        message: "Mensagem",
        placeholderMessage: "Sua mensagem",
        button: "Envia",
      },
    },
    "en-US": {
      navMenu: ["Home", "About me", "Gallery", "Contact me"],
      title:
        "Derek, a b-boy hailing from Olinda, Pernambuco, has triumphantly clinched victory at a local event. With extensive experience in workshops, he has traveled across numerous states, showcasing his skills since 2012. His passion for breaking is matched only by his dedication to the craft, as he constantly seeks opportunities to learn and grow. Derek has collaborated with various artists, blending styles and influences to create a unique performance signature. Known for his creativity and technical prowess, he inspires younger dancers while participating in community events and competitions. Always eager to share his knowledge, Derek hosts workshops that empower others to express themselves through dance.",
      sections: ["ABOUT ME", "GALLERY", "CONTACT ME"],
      form: {
        name: "Name",
        placeholderName: "Name",
        lastname: "Lastname",
        placeholderLastname: "Lastname",
        message: "Message",
        placeholderMessage: "Your Message",
        button: "Send",
      },
    },
    "es-ES": {
      navMenu: ["Home", "Acerca de mí", "galería", "Contáctame"],

      title:
        "Derek, un b-boy oriundo de Olinda, Pernambuco, logró triunfalmente la victoria en un evento local. Con amplia experiencia en talleres, ha viajado por numerosos estados, mostrando sus habilidades desde 2012. Su pasión por el break solo es igualada por su dedicación al oficio, ya que busca constantemente oportunidades para aprender y crecer. Derek ha colaborado con varios artistas, combinando estilos e influencias para crear una interpretación única. Conocido por su creatividad y destreza técnica, inspira a bailarines más jóvenes mientras participa en eventos y competencias comunitarias. Derek, siempre dispuesto a compartir sus conocimientos, organiza talleres que permiten a otros expresarse a través de la danza.",
      sections: ["ACERCA DE MÍ", "GALERÍA", "CONTACTAME"],
      form: {
        name: "Nombre",
        placeholderName: "Nombre",
        lastname: "Apellido",
        placeholderLastname: "Apellido",
        message: "Mensaje",
        placeholderMessage: "Tu mensaje",
        button: "Envia",
      },
    },
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const { navMenu, title, sections, form } = translations[language];

  return (
    <div>
      {/* Language Switcher */}
      <div className="language">
        <div className="language-selected">{language}</div>
        <ul>
          <li>
            <a href="#" className="br" onClick={() => handleLanguageChange("pt-BR")}>English</a>
          </li>
          <li>
            <a href="#" className="en" onClick={() => handleLanguageChange("en-US")}>English</a>
          </li>
          <li>
            <a href="#" className="es" onClick={() => handleLanguageChange("es-ES")}>Spanish</a>
          </li>
        </ul>
      </div>

      {/* Navigation Menu *
      <nav className="nav-menu">
        {navMenu.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </nav>

      {/* Title */}
      

      {/* Sections *
      <div className="padded-multi-line">
        {sections.map((section, index) => (
          <span key={index}>
            <span>{section}</span>
          </span>
        ))}
      </div>

      {/* Form 
      <form>
        <label className="name-js">
          {form.name}
          <input
            className="name-input-js"
            placeholder={form.placeholderName}
            type="text"
          />
        </label>
        <label className="lastname-js">
          {form.lastname}
          <input
            className="lastname-input-js"
            placeholder={form.placeholderLastname}
            type="text"
          />
        </label>
        <label className="message-js">
          {form.message}
          <textarea
            className="input-message-js"
            placeholder={form.placeholderMessage}
          ></textarea>
        </label>
        <button id="form-button">{form.button}</button>
      </form>
      */}
    </div>
  );
};

export default LanguageSwitcher;
