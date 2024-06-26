import React from "react";

import "./project-card.css";

export const ProjectCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-info">
          <div className="card-text">
            <h3 className="project-name">Hover Me</h3>
            <br />
            <p className="project-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis nesciunt repudiandae officia repellat voluptates
              adipisci consectetur magnam? Repellat, repellendus hic?
            </p>
          </div>
          <div>
            <button className="card-btn">View Project</button>
          </div>
        </div>
        <div className="layers">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
};
