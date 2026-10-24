import React, { useState, useEffect } from "react";
import "./header.css";
import { useTranslation } from "react-i18next"; // 1. Import du hook
// import Logo from "../../assets/Achraf.png"; // Décommente si tu veux l'image

const Header = () => {
  const { t, i18n } = useTranslation(); // 2. Récupération de t et i18n

  /* ======== Change Background Header ======== */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======== Toggle Menu ======== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /* ======== Changer la langue ======== */
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    showMenu(false); // Ferme le menu mobile après le changement
  };

  return (
    <header className="header">
      <nav className="nav container">
        {/* ===== LOGO ===== */}
        <a href="#home" className="nav__logo">
          {/* Option image : décommente ci-dessous */}
          {/* <img src={Logo} alt="Achraf Logo" className="nav__logo-img" /> */}
          A-Chkr
        </a>

        {/* ===== MENU ===== */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> {t("nav.home")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> {t("nav.about")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> {t("nav.skills")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> {t("nav.services")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> {t("nav.portfolio")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> {t("nav.contact")}
              </a>
            </li>
          </ul>

          {/* ===== SÉLECTEUR DE LANGUE ===== */}
          <div className="nav__languages">
            <button 
              className={`nav__lang-btn ${i18n.language === 'fr' ? 'active-lang' : ''}`} 
              onClick={() => changeLanguage('fr')}
            >
              FR
            </button>
            <span className="nav__lang-separator">|</span>
            <button 
              className={`nav__lang-btn ${i18n.language === 'en' ? 'active-lang' : ''}`} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <span className="nav__lang-separator">|</span>
            <button 
              className={`nav__lang-btn ${i18n.language === 'de' ? 'active-lang' : ''}`} 
              onClick={() => changeLanguage('de')}
            >
              DE
            </button>
          </div>

          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        {/* Toggle Menu Button */}
        <div className="nav__toggle" onClick={() => showMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;