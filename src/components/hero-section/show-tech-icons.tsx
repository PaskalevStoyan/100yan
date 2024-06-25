import React from "react";
import "./showcase.css";

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
    'Tailwind CSS',
    'git',
    'Jest',
    'npm',
  ]

  return (
    <div className="show-tech-container">
      <div className="tech-icons-wrapper">
        {icons.map((icon, index) => (
           <span icon-index={index} title={icon} className="tech-icon">
           <span title={icon}></span>
         </span>
        ))}
      </div>
    </div>
  );
};
