import React from "react";

import "./project-card.css";
import { findParent } from "../../../utils";
import { CodeIcon } from "../../../icons/code";
import { ArrowRight } from "../../../icons/arrow-right";

export const ProjectCard = () => {
  const handleMouseOver = (event: any) => {
    const target = event.target;
    const targetParent = target.parentElement; // image

    const parent = findParent(target, "card-container");
    const chipList = parent?.querySelector(".chip-list");
    const cardBtn = parent?.querySelector(".card-btn-container");

    targetParent.classList.add("active-card");
    chipList?.classList.add("show-chip-list");
    cardBtn?.classList.add("show-card-btn");
  };

  const handleMouseOut = (event: any) => {
    const target = event.target;
    const targetParent = target.parentElement; // image

    const parent = findParent(target, "card-container");
    const chipList = parent?.querySelector(".chip-list");
    const cardBtn = parent?.querySelector(".card-btn-container");

    const isHover = (e) => e.parentElement.querySelector(":hover") === e;

    console.log(isHover(cardBtn), isHover(chipList));
    
    if (!isHover(cardBtn) && !isHover(chipList)) {
      chipList?.classList.remove("show-chip-list");
      cardBtn?.classList.remove("show-card-btn");
      targetParent.classList.remove("active-card");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="project-card-image"
        >
          <div className="project-image" />
        </div>
      </div>
      <div className="card-btn-container">
        <span className="card-btn">
          <CodeIcon />
        </span>
        <span className="card-btn">
          <ArrowRight />
        </span>
      </div>
      <div className="chip-list">
        <span className="chip">React</span>
        <span className="chip">CSS3</span>
        <span className="chip">CSS3</span>
        <span className="chip">CSS3</span>
        <span className="chip">HTML5</span>
      </div>
      <div className="card-project-text">
        <h3 className="project-name">Hover Me</h3>
        <br />
        <p className="project-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          nesciunt repudiandae officia repellat voluptates adipisci consectetur
          magnam? Repellat, repellendus hic?
        </p>
      </div>
    </div>
  );
};
