import React, { useState } from 'react';
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Liens GitHub pour chaque projet
  const githubLinks = {
    1: "https://github.com/YourUsername/ecommerce-site",
    2: "https://github.com/YourUsername/weather-app",
    3: "https://github.com/YourUsername/todo-app",
    4: "https://github.com/YourUsername/website-management",
    5: "https://github.com/YourUsername/jwt-project",
    6: "https://github.com/YourUsername/autodata-manager",
    7: "https://github.com/YourUsername/ecomagentmanager-app"
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container grid">

        {/* ===== Projet 1 ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">E-commerce Site</h3>
            <a href={githubLinks[1]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">E-commerce site </h3>
              <p className="portfolio__modal-description">
                 This project is an online sales platform including a home page,
                  a contact page, a product page, and a product detail page. 
                  Developed with React for dynamic structure and navigation, 
                  it uses HTML and CSS for a simple, clear, and responsive design. 
                  Each page highlights a smooth user experience, with well-organized 
                  product details and an intuitive interface. The project is a demonstration
                   of my React and web design skills.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Projet 2 ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">Weather App</h3>
            <a href={githubLinks[2]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">Interactive weather app</h3>
              <p className="portfolio__modal-description">
                This app allows users to check the weather by entering their country and city name.
                Developed with React, HTML and CSS, it uses Axios to consume a weather API and display
                accurate information. The project integrates several React hooks to manage data, state
                and effects, providing a fluid and dynamic interface. The application stands out for 
                its ease of use and its ability to provide results in real time.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Projet 3 ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">To-Do List App</h3>
            <a href={githubLinks[3]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(3)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">To-Do List application for management</h3>
              <p className="portfolio__modal-description">
                This project is a Full-Stack application designed to manage administrative tasks for schools.
                The backend part was developed with Laravel, where all RESTful methods were implemented to 
                allow complete task management, including creation, modification, deletion and recovery of data.
                The data is stored in a MySQL database, ensuring an efficient and secure structure.
                On the frontend side, the app was built with React, offering a modern and intuitive user interface.
                Data is retrieved and manipulated in real time using Axios, which consumes REST APIs created with Laravel.
                The design is simple but effective, suitable for smooth and pleasant use.
                This project illustrates a perfect integration between backend and frontend technologies,
                demonstrating mastery of Laravel, React, MySQL, and API calls.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Projet 4 ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">Website Management</h3>
            <a href={githubLinks[4]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(4)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 4 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">Website for business management</h3>
              <p className="portfolio__modal-description">
                This project is a Full-Stack website developed with Laravel for inventory management,
                sales, purchases and financial reporting. It includes pages like homepage, services page, 
                contact page, and an admin section for product and order management. The site is offered as a
                SaaS, accessible from any device with an Internet connection, and allows store owners to monitor 
                and optimize their business operations in real time.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Projet 5 ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">JWT</h3>
            <a href={githubLinks[5]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(5)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 5 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">JWT</h3>
              <p className="portfolio__modal-description">
                  This project is a Full-Stack application developed with Node.js and MongoDB,
                  allowing the management of products and orders. User authentication is carried
                  out via JSON Web Tokens (JWT), ensuring secure access to the various functionalities.
                  Users can register, log in and manage products as well as orders. The backend is based 
                  on REST APIs developed with Express.js. In addition, extensive testing of the APIs was 
                  carried out with Postman to ensure they function properly and are reliable. 
                  This project offers a robust solution for product management platforms or inventory 
                  management systems.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Projet 6 ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">AutoData Manager</h3>
            <a href={githubLinks[6]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(6)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 6 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">AutoData Manager</h3>
              <p className="portfolio__modal-description">
                  This project is a system developed with Python and the Tkinter library
                  to create a simple and intuitive graphical interface. The program allows
                  the user to enter information about a vehicle, such as make, model, year,
                  mileage, color, and other important details. This data is then stored in
                  a local file on the computer, providing convenient and centralized information 
                  management. The interface is easy to use, allowing for quick and efficient data 
                  entry without requiring an external database.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Projet 7 ===== EcomAgentManager-APP ===== */}
        <div className="portfolio__content">
          <div className="portfolio__header">
            <i className="bx bxs-folder-open portfolio__icon"></i>
            <h3 className="portfolio__title">EcomAgentManager-APP</h3>
            <a href={githubLinks[7]} target="_blank" rel="noopener noreferrer" className="portfolio__github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <span className="portfolio__button" onClick={() => toggleTab(7)}>
            View More <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 7 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>
              <h3 className="portfolio__modal-title">EcomAgentManager-APP</h3>
              <p className="portfolio__modal-description">
                EcomAgentManager-APP is a powerful CRM platform designed to manage e-commerce websites for clients. 
                The application allows clients to create an account, connect their e-commerce site, and track all sales, 
                purchases, and user interactions in real time. The CRM analyzes data to provide actionable insights, 
                identify trends, and optimize sales strategies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
