import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container grid">

        {/* Project 1 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">E-commerce Site</h3>
            <span className="portfolio__button" onClick={() => toggleTab(1)}>
              View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </div>
          <div className="portfolio__footer">
            <a href="https://github.com/achraftes/Ecommerce-app" target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          {/* Modal */}
          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">E-commerce site</h3>
              <p className="portfolio__modal-description">
                This project is an online sales platform including a home page,
                a contact page, a product page, and a product detail page.
                Developed with React, HTML, and CSS, it provides a clear and responsive design.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">Weather App</h3>
            <span className="portfolio__button" onClick={() => toggleTab(2)}>
              View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
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
              <h3 className="portfolio__modal-title">Interactive Weather App</h3>
              <p className="portfolio__modal-description">
                Users can check the weather by entering their city. Developed with React and Axios for API calls.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
       
<div className="portfolio__content">
  <div className="portfolio__data">
    <i className="bx bxs-folder-open portfolio__icon"></i>
    <h3 className="portfolio__title">His Facade Website</h3>
    <span className="portfolio__button" onClick={() => toggleTab(3)}>
      View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
    </span>
  </div>

  <div className="portfolio__footer">
    <a 
      href="https://hisfacade.fr/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="portfolio__github"
    >
      <i className="bx bx-link-external"></i>
    </a>
  </div>

  <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
    <div className="portfolio__modal-content">
      <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

      <h3 className="portfolio__modal-title">His Facade Website</h3>

      <p className="portfolio__modal-description">
        Professional company website developed with WordPress. 
        I worked on customizing the theme, integrating Elementor for page design, 
        and configuring plugins to improve performance, SEO, and contact forms. 
        The website presents the company's services and allows clients to easily contact the business.
      </p>
    </div>
  </div>
</div>

        {/* Project 4 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">EcomAgentManager APP</h3>
            <span className="portfolio__button" onClick={() => toggleTab(4)}>
              View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
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
              <h3 className="portfolio__modal-title">EcomAgentManager CRM</h3>
              <p className="portfolio__modal-description">
                 E-commerce CRM developed with Laravel, TailwindCSS and MySQL.
                 The platform automatically assigns leads to agents and sends
                 real-time notifications to users. It includes an advanced
                 analytics dashboard displaying sellers' website performance,
                 conversion rates and key business KPIs to support fast and
                 effective decision making.
              </p>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">JWT Node.js</h3>
            <span className="portfolio__button" onClick={() => toggleTab(5)}>
              View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
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
              <h3 className="portfolio__modal-title">NodeJS-MongoDB-Order-Management</h3>
              <p className="portfolio__modal-description">
                A Full-Stack app using Node.js and MongoDB for product and order management. Features include JWT-based user authentication, REST APIs with Express.js, and robust Postman-tested functionality. Users can register, log in, and manage products/orders securely. Ideal for inventory or product management platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="portfolio__content">
          <div className="portfolio__data">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">AutoData Manager</h3>
            <span className="portfolio__button" onClick={() => toggleTab(6)}>
              View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
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
              <h3 className="portfolio__modal-title">AutoData Manager</h3>
              <p className="portfolio__modal-description">
                A Python system with a Tkinter interface for managing vehicle information, including make, model, year, mileage, and color. Data is stored in a local file, offering centralized management without an external database. The intuitive interface ensures quick, efficient data entry, making it ideal for simple record-keeping and easy user access.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;