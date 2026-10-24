import React, { useState, useEffect } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".nav__lang-container")) {
        setShowLanguages(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguages(false); 
    showMenu(false); 
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">A-Chkr</a>

        {/* ===== MENU ===== */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item"><a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}><i className="uil uil-estate nav__icon"></i> {t("nav.home")}</a></li>
            <li className="nav__item"><a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}><i className="uil uil-user nav__icon"></i> {t("nav.about")}</a></li>
            <li className="nav__item"><a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}><i className="uil uil-file-alt nav__icon"></i> {t("nav.skills")}</a></li>
            <li className="nav__item"><a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}><i className="uil uil-briefcase-alt nav__icon"></i> {t("nav.services")}</a></li>
            <li className="nav__item"><a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}><i className="uil uil-scenery nav__icon"></i> {t("nav.portfolio")}</a></li>
            <li className="nav__item"><a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}><i className="uil uil-message nav__icon"></i> {t("nav.contact")}</a></li>
          </ul>
          
          {/* Le bouton close du menu mobile */}
          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        {/* ===== SÉLECTEUR DE LANGUE (SORTI DU MENU POUR ETRE A COTE) ===== */}
        <div className="nav__lang-container">
          <button 
            className="nav__lang-toggle" 
            onClick={(e) => { e.stopPropagation(); setShowLanguages(!showLanguages); }}
          >
            <i className="uil uil-globe"></i>
            <span>{i18n.language.toUpperCase()}</span>
          </button>

          {showLanguages && (
            <div className="nav__lang-dropdown">
              <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'active-lang' : ''}>FR - Français</button>
              <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active-lang' : ''}>EN - English</button>
              <button onClick={() => changeLanguage('de')} className={i18n.language === 'de' ? 'active-lang' : ''}>DE - Deutsch</button>
            </div>
          )}
        </div>

        {/* Toggle Menu Button (Mobile) */}
        <div className="nav__toggle" onClick={() => showMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;