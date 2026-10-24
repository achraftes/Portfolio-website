import React, { useState } from "react";
import "./qualification.css";
import { useTranslation } from "react-i18next";

function Qualification() {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="Skills section" id="skills">
      <h2 className="section__title">{t("qualification.title")}</h2>
      <span className="section__subtitle">{t("qualification.subtitle")}</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {t("qualification.education")}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {t("qualification.experience")}
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          {/* Education Section */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("qualification.edu1_title")}</h3>
                <span className="qualification__subtitle">{t("qualification.edu1_subtitle")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{t("qualification.edu2_title")}</h3>
                <span className="qualification__subtitle">{t("qualification.edu2_subtitle")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2022
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Safiiir - Freelance */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("qualification.exp1_title")}</h3>
                <span className="qualification__subtitle">{t("qualification.exp1_subtitle")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2025 - 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Admigha - Mobile Developer Internship */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{t("qualification.exp2_title")}</h3>
                <span className="qualification__subtitle">{t("qualification.exp2_subtitle")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>08/2025 - 11/2025
                </div>
              </div>
            </div>

            {/* EF2C Consulting - Web Developer Internship */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("qualification.exp3_title")}</h3>
                <span className="qualification__subtitle">{t("qualification.exp3_subtitle")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>02/2025 - 05/2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Baaziz Technologies - Full-Stack Internship */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{t("qualification.exp4_title")}</h3>
                <span className="qualification__subtitle">{t("qualification.exp4_subtitle")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>04/2024 - 05/2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;