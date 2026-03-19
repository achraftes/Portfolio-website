import React, { useState } from 'react'
import "./skills.css"

const skillCategories = [
  {
    id: "languages",
    icon: "bx bx-code-alt",
    title: "Langages",
    color: "#6366f1",
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
    ]
  },
  {
    id: "frameworks",
    icon: "bx bx-layer",
    title: "Frameworks & Libs",
    color: "#06b6d4",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Angular", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Tailwind", level: "Intermediate" },
    ]
  },
  {
    id: "databases",
    icon: "bx bx-data",
    title: "Bases de données",
    color: "#10b981",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "NoSQL / MongoDB", level: "Intermediate" },
    ]
  },
  {
    id: "devops",
    icon: "bx bx-server",
    title: "DevOps & Outils",
    color: "#f59e0b",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "CI/CD", level: "Basic" },
      { name: "Postman", level: "Intermediate" },
    ]
  },
  {
    id: "design",
    icon: "bx bx-shape-triangle",
    title: "Modélisation",
    color: "#ec4899",
    skills: [
      { name: "UML", level: "Intermediate" },
      { name: "Merise", level: "Intermediate" },
      { name: "WordPress", level: "Intermediate" },
    ]
  },
  {
    id: "methods",
    icon: "bx bx-task",
    title: "Méthodes & Gestion",
    color: "#8b5cf6",
    skills: [
      { name: "Agile", level: "Intermediate" },
      { name: "Scrum", level: "Intermediate" },
      { name: "Full-Stack Dev", level: "Intermediate" },
    ]
  },
]

const levelMap = { Advanced: 3, Intermediate: 2, Basic: 1 }
const levelLabel = { Advanced: "Avancé", Intermediate: "Intermédiaire", Basic: "Débutant" }

const Skills = () => {
  const [active, setActive] = useState(null)

  return (
    <section className="Skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Mon niveau technique</span>

      <div className="skills__grid container">
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            className={`skills__card ${active === cat.id ? 'skills__card--open' : ''}`}
            style={{ '--cat-color': cat.color }}
            onClick={() => setActive(active === cat.id ? null : cat.id)}
          >
            <div className="skills__card-header">
              <span className="skills__card-icon">
                <i className={cat.icon}></i>
              </span>
              <h3 className="skills__card-title">{cat.title}</h3>
              <span className="skills__card-count">{cat.skills.length}</span>
              <i className={`bx ${active === cat.id ? 'bx-chevron-up' : 'bx-chevron-down'} skills__card-arrow`}></i>
            </div>

            <div className="skills__card-body">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skills__item">
                  <div className="skills__item-top">
                    <span className="skills__item-name">{skill.name}</span>
                    <span className="skills__item-level">{levelLabel[skill.level]}</span>
                  </div>
                  <div className="skills__bar-track">
                    <div
                      className="skills__bar-fill"
                      style={{ '--bar-width': `${(levelMap[skill.level] / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills




.skills__container {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    column-gap: 6rem;
    justify-content: center;
}

.skills__content {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 4rem;
    border-radius: 1.25rem;
}

.skills__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    text-align: center;
    margin-bottom: var(--mb-1-5);
}

.skills__box {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
}

.skills__group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
}
    
.skills__data {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
}

.skills .bx-badge-check {
    font-size: 1rem;
    color: var(--title-color);
}

.skills__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    line-height: 18px;
}


/*=============== BREAKPOINTS ===============*/
/* For large devices */
@media screen and (max-width: 992px) {
    .skills__container {
        grid-template-columns: max-content;
        row-gap: 2rem;
    }
    
    
  }

  /* For medium devices */

  @media screen and (max-width: 768px) {
    .skills__container {
        grid-template-columns: repeat(2, 1fr);
        
    }
    .skills__content {
        padding: 1.5rem;
      }
  }

  @media screen and (max-width: 576px) {
      .skills__container {
        grid-template-columns: 2fr;

      }
      .skills__content {
        padding: 1.5rem;
      }
  }
  
  /* For small devices */
  @media screen and (max-width: 350px) {
   
     .skills__box {
        column-gap: 1.25rem;

     }
     .skills__name {
        font-size: var(--small-font-size);
     }
  }
  