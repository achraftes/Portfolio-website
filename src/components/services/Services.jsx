import React , { useState } from 'react';
import "./services.css";

const Services = () => {
   const [toggleState, setToggleState] = useState(0);

   const toggleTab = (index) => {
       setToggleState(index);
   };

   return (
       <section className="services section" id="services">
           <h2 className="section__title">Services</h2>
           <span className="section__subtitle">What I offer</span>

           <div className="services__container container grid">

               {/* ===== Web Developer ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-arrow services__icon"></i>
                       <h3 className="services__title">Web <br /> Developer</h3>
                   </div>

                   <span className="services__button" onClick={() => toggleTab(1)}>
                       View More <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>

                   <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                           <h3 className="services__modal-title">Web Developer</h3>
                           <p className="services__modal-description">
                               I build modern and responsive web applications using modern technologies
                               to deliver high-quality digital solutions.
                           </p>

                           <ul className="services__modal-services grid">
                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Development of responsive user interfaces.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Frontend development with React and JavaScript.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Backend development with Laravel and APIs.</p>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>


               {/* ===== UI UX Designer ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-web-grid services__icon"></i>
                       <h3 className="services__title">UI/UX <br /> Designer</h3>
                   </div>

                   <span className="services__button" onClick={() => toggleTab(2)}>
                       View More <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>

                   <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                           <h3 className="services__modal-title">UI/UX Designer</h3>
                           <p className="services__modal-description">
                               I design modern, intuitive and user-friendly interfaces to improve the
                               user experience of websites and web applications.
                           </p>

                           <ul className="services__modal-services grid">
                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Interactive prototypes and wireframes.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">UI design and layout creation.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">User experience optimization.</p>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>


               {/* ===== Web Integrator ===== */}
               <div className="services__content">
                   <div>
                       <i className="uil uil-wordpress services__icon"></i>
                       <h3 className="services__title">Web <br /> Integrator</h3>
                   </div>

                   <span className="services__button" onClick={() => toggleTab(3)}>
                       View More <i className="uil uil-arrow-right services__button-icon"></i>
                   </span>

                   <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                       <div className="services__modal-content">
                           <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                           <h3 className="services__modal-title">Web Integrator</h3>
                           <p className="services__modal-description">
                               I integrate websites with marketing and CRM systems using modern tools
                               and automation to manage leads and customer data efficiently.
                           </p>

                           <ul className="services__modal-services grid">
                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">WordPress website integration.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Connecting forms with CRM systems.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Using webhooks to send leads automatically.</p>
                               </li>

                               <li className="services__modal-service">
                                   <i className="uil uil-check-circle services__modal-icon"></i>
                                   <p className="services__modal-info">Integration with marketing tools and automation.</p>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>

           </div>
       </section>
   );
};

export default Services;