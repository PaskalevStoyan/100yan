import React from "react";

import "./tech-icons.css";

export const ShowTechIcons = () => {
  const icons = [
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'NextJS',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'TailwindCSS',
    'git',
    'Jest',
    'npm',
    "firebase"
  ]

  return (
    <div className="tech-icons-container">
      <h2 className="tech-icons-title">My Building Tools</h2>
      <div className="tech-icons-wrapper">
        {icons.map((icon, index) => (
           <span key={icon} className={`${icon}-icon tech-icon`} icon-index={index} title={icon}></span>
        ))}
      </div>
    </div>
  );
};
