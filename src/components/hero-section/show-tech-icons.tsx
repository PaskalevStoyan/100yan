import React from "react";
import "./showcase.css";

export const ShowTechIcons = () => {
  const [labelText, setLabelText] = React.useState("HTML5");
  const [labelPosition, setLabelPosition] = React.useState(0);

  const onIconHover = (event: any) => {
    const target = event.target;

    if (target.title) {
      const targetRect = target.getBoundingClientRect();

      const getLabelText = document.querySelector(".icon-label-text");

      console.log(targetRect)
      getLabelText?.classList.add("show-label");
      const parentIndex = target.parentNode.getAttribute("icon-index");

      setLabelPosition((parentIndex * 48));
      
      setLabelText(target.title);
    }
  };
  return (
    <div onMouseOver={onIconHover} className="show-tech-container">
      <div className="tech-icons-wrapper">
        <span
          icon-index="0"
          title="HTML5"
          onMouseOver={onIconHover}
          className="tech-icon"
        >
          <img
            title="HTML5"
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="html"
          />
        </span>
        <span
          icon-index="1"
          onMouseOver={onIconHover}
          title="CSS3"
          className="tech-icon"
        >
          <img
            title="CSS3"
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="css"
          />
        </span>
        <span
          icon-index="2"
          onMouseOver={onIconHover}
          title="Java Script"
          className="tech-icon"
        >
          <img
            title="Java Script"
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            alt="js"
          />
        </span>
        <span
          icon-index="3"
          onMouseOver={onIconHover}
          title="React"
          className="tech-icon"
        >
          <img
            title="React"
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="react"
          />
        </span>
        <span
          icon-index="4"
          onMouseOver={onIconHover}
          title="SASS"
          className="tech-icon"
        >
          <img
            title="Sass"
            src="https://img.icons8.com/color/48/000000/sass.png"
            alt="sass"
          />
        </span>
        <span
          icon-index="5"
          onMouseOver={onIconHover}
          title="GIT"
          className="tech-icon"
        >
          <img
            title="Git"
            src="https://img.icons8.com/color/48/000000/git.png"
            alt="git"
          />
        </span>
        <span
          icon-index="6"
          onMouseOver={onIconHover}
          title="NPM"
          className="tech-icon"
        >
          <img
            title="npm"
            src="https://img.icons8.com/color/48/000000/npm.png"
            alt="npm"
          />
        </span>
        <span
          icon-index="7"
          onMouseOver={onIconHover}
          title="Webpack"
          className="tech-icon"
        >
          <img
            title="Webpack"
            src="https://img.icons8.com/color/48/000000/webpack.png"
            alt="webpack"
          />
        </span>
      </div>

      <div
        style={{ left: labelPosition }}
        className="icon-label-text"
      >
        {labelText}
      </div>
    </div>
  );
};

/**
 *
 * <div class="scroll">
 *  <div>
 *    <span></span>
 *    <span></span>
 *    <span></span>
 *    <span></span>
 *    <span></span>
 *  </div>
 *  <div>
 *    <span></span>
 *    <span></span>
 *    <span></span>
 *    <span></span>
 *    <span></span>
 *  </div>
 * </div>
 */
