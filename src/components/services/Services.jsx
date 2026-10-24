import React, { useState } from 'react';
import "./services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
   const { t } = useTranslation();
   const [toggleState, setToggleState] = useState(0);

   const toggleTab = (index) => {
       setToggleState(index);
   };

   return (
       <section className="services section" id="services">
           <h2 className="section__title">{t("services.title")}</h2>
           <span className="section__subtitle">{t("services.subtitle")}</span>

           <div className="services__container container grid">

               {/* ===== 1. Web Developer ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-arrow services__icon"></i>
                       <h3 className="services__title">Web <br /> Developer</h3>
                   </div>

                   <span className="services__button" onClick={() => toggleTab(1)}>
                       {t("services.view_more")} <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>

                   <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                           <h3 className="services__modal-title">{t("services.web_dev.title")}</h3>
                           <p className="services__modal-description">{t("services.web_dev.description")}</p>
                           <ul className="services__modal-services grid">
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_dev.list1")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_dev.list2")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_dev.list3")}</p></li>
                           </ul>
                       </div>
                   </div>
               </div>

               {/* ===== 2. UI UX Designer ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-web-grid services__icon"></i>
                       <h3 className="services__title">UI/UX <br /> Designer</h3>
                   </div>
                   <span className="services__button" onClick={() => toggleTab(2)}>
                       {t("services.view_more")} <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>
                   <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                           <h3 className="services__modal-title">{t("services.ui_ux.title")}</h3>
                           <p className="services__modal-description">{t("services.ui_ux.description")}</p>
                           <ul className="services__modal-services grid">
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.ui_ux.list1")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.ui_ux.list2")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.ui_ux.list3")}</p></li>
                           </ul>
                       </div>
                   </div>
               </div>

               {/* ===== 3. Web Integrator ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-wordpress services__icon"></i>
                       <h3 className="services__title">Web <br /> Integrator</h3>
                   </div>
                   <span className="services__button" onClick={() => toggleTab(3)}>
                       {t("services.view_more")} <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>
                   <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                           <h3 className="services__modal-title">{t("services.web_integrator.title")}</h3>
                           <p className="services__modal-description">{t("services.web_integrator.description")}</p>
                           <ul className="services__modal-services grid">
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_integrator.list1")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_integrator.list2")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_integrator.list3")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.web_integrator.list4")}</p></li>
                           </ul>
                       </div>
                   </div>
               </div>

               {/* ===== 4. Mobile Developer ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-mobile-android services__icon"></i>
                       <h3 className="services__title">Mobile <br /> Developer</h3>
                   </div>
                   <span className="services__button" onClick={() => toggleTab(4)}>
                       {t("services.view_more")} <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>
                   <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                           <h3 className="services__modal-title">{t("services.mobile_dev.title")}</h3>
                           <p className="services__modal-description">{t("services.mobile_dev.description")}</p>
                           <ul className="services__modal-services grid">
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.mobile_dev.list1")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.mobile_dev.list2")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.mobile_dev.list3")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.mobile_dev.list4")}</p></li>
                           </ul>
                       </div>
                   </div>
               </div>

               {/* ===== 5. SEO Optimization ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-search-alt services__icon"></i>
                       <h3 className="services__title">SEO <br /> Optimization</h3>
                   </div>
                   <span className="services__button" onClick={() => toggleTab(5)}>
                       {t("services.view_more")} <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>
                   <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                           <h3 className="services__modal-title">{t("services.seo.title")}</h3>
                           <p className="services__modal-description">{t("services.seo.description")}</p>
                           <ul className="services__modal-services grid">
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.seo.list1")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.seo.list2")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.seo.list3")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.seo.list4")}</p></li>
                           </ul>
                       </div>
                   </div>
               </div>

               {/* ===== 6. DevOps & Cloud ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-cloud-computing services__icon"></i>
                       <h3 className="services__title">DevOps & <br /> Cloud</h3>
                   </div>
                   <span className="services__button" onClick={() => toggleTab(6)}>
                       {t("services.view_more")} <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>
                   <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                           <h3 className="services__modal-title">{t("services.devops.title")}</h3>
                           <p className="services__modal-description">{t("services.devops.description")}</p>
                           <ul className="services__modal-services grid">
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.devops.list1")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.devops.list2")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.devops.list3")}</p></li>
                               <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"></i><p className="services__modal-info">{t("services.devops.list4")}</p></li>
                           </ul>
                       </div>
                   </div>
               </div>

           </div>
       </section>
   );
};

export default Services;