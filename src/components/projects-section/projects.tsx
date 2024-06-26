import React from "react";
import "./projects.css";

import { ProjectCard } from "./project-cards/project-card";

export const ProjectSection = () => {

  return (
    // TODO: card colors will be depending on the Project
    <div id="Projects" className="projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
};