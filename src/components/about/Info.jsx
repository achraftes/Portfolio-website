import React from 'react';
import { useTranslation } from "react-i18next";

function Info() {
    const { t } = useTranslation();

    return (
       <div className="about__info grid">
         <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">{t("about.info.experience_title")}</h3>
            <span className="about__subtitle">{t("about.info.experience_subtitle")}</span>
         </div>

         <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">{t("about.info.completed_title")}</h3>
            <span className="about__subtitle">{t("about.info.completed_subtitle")}</span>
         </div>

         <div className="about__box">
            <i className='bx bx-support about__icon' ></i>
            <h3 className="about__title">{t("about.info.support_title")}</h3>
            <span className="about__subtitle">{t("about.info.support_subtitle")}</span>
         </div>
       </div>
    )
}

export default Info;