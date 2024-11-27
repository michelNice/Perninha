import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          access_key: '7098f102-20a7-401d-aa1e-6147898a1c35',
        }),
      });
      if (response.ok) {
        alert(t('submissionMessagem')); // Use a translated success message
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert(t('form Error Message')); // Use a translated error message
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert(t('form Error Message')); // Use a fallback error message
    }
  };

  return (
    <>
      <div className="starcontainer">
        <h2 id="contact-title">{t('contact')}</h2>
        <div className="star-line">
          <hr className="line" />
          <i className="fa fa-paper-plane star-icon"></i>
          <hr className="line" />
        </div>
      </div>
      <form
        className="container-contact"
        onSubmit={handleSubmit}
        id="contact"
      >
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <input
              type="text"
              name="name"
              className="field"
              placeholder={t('nameContact')}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="field"
              placeholder={t('emailContact')}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              className="field"
              placeholder={t('phoneContact')}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={t('massegemContact')}
              className="field"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn" type="submit">
              {t('buttonContact')}
            </button>
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
