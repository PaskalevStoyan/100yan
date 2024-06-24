import React from "react";
import "./showcase.css";

export const ShowTechIcons = () => {
  return (
    <div className="show-tech-container">
      <div className="tech-icons-wrapper">
        <span icon-index="0" title="HTML5" className="tech-icon">
          <img
            title="HTML5"
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="html"
          />
        </span>
        <span icon-index="1" title="CSS3" className="tech-icon">
          <img
            title="CSS3"
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="css"
          />
        </span>
        <span icon-index="2" title="Java Script" className="tech-icon">
          <img
            title="Java Script"
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            alt="js"
          />
        </span>
        <span icon-index="3" title="React" className="tech-icon">
          <img
            title="React"
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="react"
          />
        </span>
        <span icon-index="4" title="SASS" className="tech-icon">
          <img
            title="Sass"
            src="https://img.icons8.com/color/48/000000/sass.png"
            alt="sass"
          />
        </span>
        <span icon-index="5" title="GIT" className="tech-icon">
          <img
            title="Git"
            src="https://img.icons8.com/color/48/000000/git.png"
            alt="git"
          />
        </span>
        <span icon-index="6" title="NPM" className="tech-icon">
          <img
            title="npm"
            src="https://img.icons8.com/color/48/000000/npm.png"
            alt="npm"
          />
        </span>
        <span icon-index="7" title="Webpack" className="tech-icon">
          <img
            title="Webpack"
            src="https://img.icons8.com/color/48/000000/webpack.png"
            alt="webpack"
          />
        </span>
      </div>
    </div>
  );
};
