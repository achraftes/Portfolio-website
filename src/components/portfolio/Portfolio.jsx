import React, { useState } from "react";
import "./portfolio.css";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">{t("portfolio.title")}</h2>
      <span className="section__subtitle">{t("portfolio.subtitle")}</span>

      <div className="portfolio__container container grid">

        {/* Project 1 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">{t("portfolio.project1.title")}</h3>
            <span className="portfolio__button" onClick={() => toggleTab(1)}>
              {t("portfolio.view_more")} <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>
          <div className="portfolio__footer">
            <a href="https://github.com/achraftes/Ecommerce-app" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">{t("portfolio.project1.modal_title")}</h3>
              <p className="portfolio__modal-description">{t("portfolio.project1.description")}</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">{t("portfolio.project2.title")}</h3>
            <span className="portfolio__button" onClick={() => toggleTab(2)}>
              {t("portfolio.view_more")} <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>
          <div className="portfolio__footer">
            <a href="https://github.com/achraftes/Weather" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">{t("portfolio.project2.modal_title")}</h3>
              <p className="portfolio__modal-description">{t("portfolio.project2.description")}</p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">{t("portfolio.project3.title")}</h3>
            <span className="portfolio__button" onClick={() => toggleTab(3)}>
              {t("portfolio.view_more")} <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>

          <div className="portfolio__footer">
            <a href="https://hisfacade.fr/" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bx-link-external"></i>
            </a>
          </div>

          <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">{t("portfolio.project3.modal_title")}</h3>
              <p className="portfolio__modal-description">{t("portfolio.project3.description")}</p>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">{t("portfolio.project4.title")}</h3>
            <span className="portfolio__button" onClick={() => toggleTab(4)}>
              {t("portfolio.view_more")} <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>
          <div className="portfolio__footer">
            <a href="https://github.com/achraftes/EcomAgentManager-APP" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className={toggleState === 4 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">{t("portfolio.project4.modal_title")}</h3>
              <p className="portfolio__modal-description">{t("portfolio.project4.description")}</p>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">{t("portfolio.project5.title")}</h3>
            <span className="portfolio__button" onClick={() => toggleTab(5)}>
              {t("portfolio.view_more")} <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>
          <div className="portfolio__footer">
            <a href="https://github.com/achraftes/NodeJS-MongoDB-Order-Management" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className={toggleState === 5 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">{t("portfolio.project5.modal_title")}</h3>
              <p className="portfolio__modal-description">{t("portfolio.project5.description")}</p>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">{t("portfolio.project6.title")}</h3>
            <span className="portfolio__button" onClick={() => toggleTab(6)}>
              {t("portfolio.view_more")} <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>
          <div className="portfolio__footer">
            <a href="https://github.com/achraftes/AutoData-Manager" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className={toggleState === 6 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">{t("portfolio.project6.modal_title")}</h3>
              <p className="portfolio__modal-description">{t("portfolio.project6.description")}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;