import React, { useState } from 'react';
import './Contact.css'; 
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  // State to control form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation or submit logic here

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    alert('Form submitted successfully!');
  };

  return (
    <>
      <div className="starcontainer">
        <h2 id='contact'>{t("contact")}</h2>
        <div className="star-line">
          <hr className="line" />
          <i className="fa fa-paper-plane star-icon"></i>
          <hr className="line" />
        </div>
      </div>
      <form
        className="container-contact"
        id='contact'
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="access_key" value="7098f102-20a7-401d-aa1e-6147898a1c35" />
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <input
              type="text"
              name="name"
              className="field"
              placeholder={t("nameContact")}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="field"
              placeholder={t("emailContact")}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              className="field"
              placeholder={t("phoneContact")}
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder={t("massegemContact")}
              className="field"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="btn">{t("buttonContact")}</button>
          </div>
        </div>
      </form>

      <footer>
        <div className="rounded-social-buttons">
          <a
            className="social-button facebook"
            href="https://www.facebook.com/perninha94/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
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

