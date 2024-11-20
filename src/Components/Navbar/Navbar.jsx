import React from 'react'
import './Navbar.css';
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
              <a className="navbar-link" href="#some-content-3" data-anchor-link>Partnership</a>
            </li>

            <li className="navbar-item">
              <a className="navbar-link" href="#some-content-4" data-anchor-link>Contact me</a>
            </li>
          </ul>
          
          <div className="language">
      <div className="language-selected">en-US</div>
      <ul>
        <li>
          <a href="#" className="br">
            Portuguese
          </a>
        </li>
        <li>
          <a href="#" className="en">
            English
          </a>
        </li>
        <li>
          <a href="#" className="es">
            Spanish
          </a>
        </li>
      </ul>
    </div>


          {/*
          <div className="main_container">
            <div className="lang_toggle">
              <input type="checkbox" className="langInput" id="toggleBtn" />
              <label htmlFor="toggleBtn" className="toggle_header">
                <div>
                  <img src="https://flagcdn.com/w80/br.png"alt="Brazil Flag"width="80"height="53"/>
                </div>
                <div>
                  <img src="https://flagcdn.com/w80/us.png"alt="US Flag"width="80"height="53"/>
                </div>
              </label>
            </div>
          </div>
            */}
          <div className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Navbar