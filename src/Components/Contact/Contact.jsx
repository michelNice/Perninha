import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <>
    <div className="starcontainer">
      <h2>Get In Toch</h2>
      <div className="star-line">
        <hr className="line" />
        <i className="fa fa-paper-plane star-icon"></i>
        
        <hr className="line" />
      </div>
    </div>
    <div className="container-contact">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <input type="text" className="field" placeholder="Your Name" />
          <input type="text" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Phone" />
          <textarea placeholder="Message" className="field"></textarea>
          <button className="btn">Send</button>
        </div>
      </div>
    </div>

    <footer>
      <div className="rounded-social-buttons">
        <a
          className="social-button facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="social-button twitter"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        
       
        <a
          className="social-button youtube"
          href="https://www.youtube.com/@PerninhaOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="social-button instagram"
          href="https://www.instagram.com/bboyperninha94/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>

    </>
  );
};

export default Contact;
