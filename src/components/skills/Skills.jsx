import React, { useState } from 'react';
import "./skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  // On utilise t() à l'intérieur du composant pour traduire les titres
  const skillCategories = [
    {
      id: "languages",
      icon: "bx bx-code-alt",
      title: t("skills.cat_languages"),
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
      title: t("skills.cat_frameworks"),
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
      title: t("skills.cat_databases"),
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
      title: t("skills.cat_devops"),
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
      title: t("skills.cat_design"),
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
      title: t("skills.cat_methods"),
      color: "#8b5cf6",
      skills: [
        { name: "Agile", level: "Intermediate" },
        { name: "Scrum", level: "Intermediate" },
        { name: "Full-Stack Dev", level: "Intermediate" },
      ]
    },
  ];

  const levelMap = { Advanced: 3, Intermediate: 2, Basic: 1 };

  return (
    <section className="Skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

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
                  <span className="skills__item-name">{skill.name}</span>
                  <div className="skills__bar-track">
                    <div
                      className="skills__bar-fill"
                      style={{ '--bar-width': `${(levelMap[skill.level] / 3) * 100}%` }}
                    ></div>
                  </div>
                  <span className="skills__item-level" style={{ fontSize: '0.75rem', color: 'var(--text-color-light)', marginLeft: '0.5rem' }}>
                     {t(`skills.${skill.level.toLowerCase()}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;