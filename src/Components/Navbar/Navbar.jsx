/*import React from 'react'
import './Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-content-left">
          <a className="navbar-link logo" href="#header" data-anchor-link>Perninha</a>
        </div>
        
        <div className="navbar-content-right">
          <ul className="navbar-toggle-content">
            <li className="navbar-item">
              <a className="navbar-link" href="#some-content-1" data-anchor-link>Home</a>
            </li>

            <li className="navbar-item">
              <a className="navbar-link" href="#some-content-2" data-anchor-link>About me</a>
            </li>

            <li className="navbar-item">
              <a className="navbar-link" href="#some-content-3" data-anchor-link>Crews</a>
            </li>

            <li className="navbar-item">
              <a className="navbar-link" href="#some-content-3" data-anchor-link>Partnership</a>
            </li>

            <li className="navbar-item">
              <a className="navbar-link" href="#some-content-4" data-anchor-link>Contact me</a>
            </li>
          </ul>
          <LanguageSwitcher />
          <div className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Navbar






import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Toggle the navbar menu
  
  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  // Close the navbar menu
  const closeNavbar = () => {
    setIsOpen(false);
  };
  
  // Handle scroll to activate navbar
  useEffect(() => {
    const handleScroll = () => {
      const heightActivateState = 400;
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsActive(scrolled > heightActivateState);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scrolling for anchor links
  
  const handleLinkClick = (event, href) => {
    event.preventDefault();
    closeNavbar();

    if (href && href !== '#') {
      const section = document.querySelector(href);
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth',
        });
      }
    }
      
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-content-left">
          <a className="navbar-link logo" href="#header" data-anchor-link>
            Perninha
          </a>
        </div>

        <div className="navbar-content-right">
          <ul className={`navbar-toggle-content ${isOpen ? 'open' : ''}`}>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#some-content-1"
                data-anchor-link
                onClick={(e) => handleLinkClick(e, '#some-content-1')}
              >
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#some-content-2"
                data-anchor-link
                onClick={(e) => handleLinkClick(e, '#some-content-2')}
              >
                About me
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#some-content-3"
                data-anchor-link
                onClick={(e) => handleLinkClick(e, '#some-content-3')}
              >
                Crews
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#some-content-3"
                data-anchor-link
                onClick={(e) => handleLinkClick(e, '#some-content-3')}
              >
                Parnership
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#some-content-4"
                data-anchor-link
                onClick={(e) => handleLinkClick(e, '#some-content-4')}
              >
                Contact me
              </a>
            </li>
          </ul>
          <LanguageSwitcher />
          <div className="navbar-toggler" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

*/





import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';


import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation(); // Access translation function

  // Toggle the navbar menu
  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close the navbar menu
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Handle scroll to activate navbar
  useEffect(() => {
    const handleScroll = () => {
      const heightActivateState = 400;
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsActive(scrolled > heightActivateState);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scrolling for anchor links
  const handleLinkClick = (event, href) => {
    event.preventDefault();
    closeNavbar();

    if (href && href !== '#') {
      const section = document.querySelector(href);
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-content-left">
          <a className="navbar-link logo" href="#home" data-anchor-link onClick={(e) => handleLinkClick(e, '#home')}>
            Perninha
          </a>
        </div>

        <div className="navbar-content-right">
          <ul className={`navbar-toggle-content ${isOpen ? 'open' : ''}`}>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
              >
                {t('home')}
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#aboutme"
                onClick={(e) => handleLinkClick(e, '#aboutme')}
              >
                  {t('about')}
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#crew"
                onClick={(e) => handleLinkClick(e, '#crew')}
              >
                {t('crews')}
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#parnership"
                onClick={(e) => handleLinkClick(e, '#parnership')}
              >
                {t("parnership")}
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#gallery"
                onClick={(e) => handleLinkClick(e, '#gallery')}
              >
                  {t("gallery")}
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                {t("contactNav")}
              </a>
            </li>

             <li className="navbar-item">
                <a href="https://www.instagram.com/bboyperninha94/" rel="noopener noreferrer" target='_blank' className='nav-instagram'><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
          <LanguageSwitcher />
          <div
            className={`navbar-toggler ${isOpen ? 'open' : ''}`}
            onClick={toggleNavbar}
          >
            <span className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

