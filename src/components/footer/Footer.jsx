import React from 'react';
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">

        <div className="footer__top">
          <div className="footer__brand">
            <h1 className="footer__title">Chikrabane</h1>
            <p className="footer__tagline">Full-Stack Developer & Designer</p>
          </div>

          <nav className="footer__nav">
            <span className="footer__nav-label">Navigation</span>
            <ul className="footer__list">
              <li><a href="#about" className="footer__link">About</a></li>
              <li><a href="#portfolio" className="footer__link">Projects</a></li>
              <li><a href="#services" className="footer__link">Services</a></li>
            </ul>
          </nav>

          <div className="footer__contact-block">
            <span className="footer__nav-label">Connect</span>
            <div className="footer__social">
              <a href="https://www.instagram.com/achraf_chkr/" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/achraf-chikrabane-850554291/" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://x.com/chkr_achraf" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {currentYear} Achraf Chikrabane. All rights reserved.
          </span>
          <span className="footer__made">
            Designed & built with <span className="footer__heart">♥</span> by Achraf
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;