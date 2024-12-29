import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Chikrabane</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/achraf_chkr/" className="footer__social-link" target="_blank">
                   <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/achraf-chikrabane-850554291/" className="footer__social-link" target="_blank">
                 <i className="bx bxl-linkedin" ></i>
                 </a>

                 <a href="https://x.com/chkr_achraf" className="footer__social-link" target="_blank">
                   <i className="bx bxl-twitter"></i>   
                  </a>
            </div>

            <span className="footer__copy">© {new Date().getFullYear()} Chikrabane. All rigths reserved</span>
        </div>
     </footer>
    )
}

export default Footer
