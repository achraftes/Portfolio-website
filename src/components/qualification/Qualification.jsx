import React, {useState} from 'react'
import "./qualification.css"
function Qualification() {

    const [toggleState, setToggleState] = useState(1);
    
       const toggleTab = (index) => {
           setToggleState(index);
       };
    return (
        
        <section className="Skills section" id="skills">
         <h2 className="section__title">Qualification</h2>
         <span className="section__subtitle">My personel journey</span>

         <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                  className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex"  
                    : "qualification__button button--flex"
                 }
                 onClick={()=> toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div  className={toggleState === 2 
                    ? "qualification__button qualification__active button--flex"  
                    : "qualification__button button--flex"
                 }
                 onClick={()=> toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                 <div 
                  className={toggleState === 1
                    ? "qualification__content qualification__content-active "  
                    : "qualification__content"
                 }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Web Development</h3>
                            <span className="qualification__subtitle">Institut specialise de technologie</span>
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
                            <h3 className="qualification__title">Baccalaureate in physical science</h3>
                            <span className="qualification__subtitle">Imam al ghazali high school</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2021 - 2022
                            </div>
                        </div> 
                    </div>
                </div>


                <div  className={toggleState === 2
                    ? "qualification__content qualification__content-active "  
                    : "qualification__content"
                 }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">PHP Web Development</h3>
                            <span className="qualification__subtitle">Baaziz technologie</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2024 - 2024
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
                            <h3 className="qualification__title">Frontend Development</h3>
                            <span className="qualification__subtitle">Baaziz technologie</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2023 - 2023
                            </div>
                        </div> 
                    </div>

                    

                   

                   

                   

                </div>
            </div>
         </div>
       </section>
    )
}

export default Qualification
