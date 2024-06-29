import React from "react";
import "./projects.css";

import { ProjectCard } from "./project-cards/project-card";

export const ProjectSection = () => {
  return (
    // TODO: card colors will be depending on the Project
    <div className="projects-container">
      {/* <div className="projects-gradient"></div> */}
     <div>
     <h1 className="projects-text">So called Projects / Adventures</h1>
      <p className="projects-desc">Current collection of Projects and Mockups.</p>
     </div>
      <div id="Projects" className="projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
