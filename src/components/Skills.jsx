import React from "react";
import "../styles/enjong.css";

export default function Skills() {
  const skills = [
    "C#",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Git",
    "Flogrowth",
    "Flutter",
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
