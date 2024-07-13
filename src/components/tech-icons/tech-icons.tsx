import React from "react";

import "./tech-icons.css";

import { JSIcon } from "../../icons/tech-icons/javascript-icon";
import { TSIcon } from "../../icons/tech-icons/typescript-icon";
import { ReactIcon } from "../../icons/tech-icons/react-icon";
import { AngularIcon } from "../../icons/tech-icons/angular-icon";
import { NextJSIcon } from "../../icons/tech-icons/next-js-icon";
import { HTMLIcon } from "../../icons/tech-icons/html-icon";
import { CSSIcon } from "../../icons/tech-icons/css-icon";
import { NodeJSIcon } from "../../icons/tech-icons/node-icon";
import { BootstrapIcon } from "../../icons/tech-icons/bootstrap-icon";
import { TailwindIcon } from "../../icons/tech-icons/tailwind-icon";
import { GitIcon } from "../../icons/tech-icons/git-icon";
import { JestIcon } from "../../icons/tech-icons/jest-icon";
import { PythonIcon } from "../../icons/tech-icons/python-icon";
import { BashIcon } from "../../icons/tech-icons/bash-icon";
import { NPMIcon } from "../../icons/tech-icons/npm-icon";
import { FirebaseIcon } from "../../icons/tech-icons/firebase-icon";
import { FigmaIcon } from "../../icons/tech-icons/figma-icon";

const iconConfig: Array<any> = [
  { name: "JavaScript", icon: <JSIcon />, color: "#f0db4f", type: "fill" },
  { name: "TypeScript", icon: <TSIcon />, color: "#007acc", type: "stroke" },
  { name: "NodeJS", icon: <NodeJSIcon />, color: "#3c873a", type: "fill" },
  { name: "React", icon: <ReactIcon />, color: "#61DBFB", type: "fill" },
  { name: "Angular", icon: <AngularIcon />, color: "#a6120d", type: "stroke" },
  { name: "NextJS", icon: <NextJSIcon />, color: "#93B4FF" },
  { name: "Python", icon: <PythonIcon />, color: "#4584b6", type: "fill" },
  { name: "Bash", icon: <BashIcon />, color: "#72A825", type: "stroke" },
  { name: "HTML5", icon: <HTMLIcon />, color: "#f06529", type: "fill" },
  { name: "CSS3", icon: <CSSIcon />, color: "#93B4FF", type: "fill" },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    color: "#563d7c",
    type: "fill",
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon />,
    color: "#a5f3fc",
    type: "stroke",
  },
  { name: "Git", icon: <GitIcon />, color: "#f34f29", type: "fill" },
  { name: "Jest", icon: <JestIcon />, color: "#99415a", type: "fill" },
  { name: "NPM", icon: <NPMIcon />, color: "#CC3534", type: "fill" },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
    color: "#FFA000",
    type: "stroke",
  },
  {
    name: "Figma",
    icon: <FigmaIcon />,
    color: ["#f24e1e", "#ff7262", "a259ff", "#1abcfe", "#0acf83"],
    type: "stroke",
  },
];

export const ShowTechIcons = () => {
  const handleOnHover = (event) => {
    const target = event.target;

    const getIconConfig = iconConfig.find(
      (_, index) => index === Number(target.getAttribute(`icon-index`))
    );

    const findPathToFill = Array.from(
      target.querySelectorAll(".icon-on-hover")
    );

    if (findPathToFill) {
      const styleType = getIconConfig?.type;
      const color = getIconConfig?.color;

      findPathToFill.forEach((path: any, index: number) => {
        if (styleType === "fill") {
          path.style.fill = color;
        } else if (styleType === "stroke") {
          if (getIconConfig.name === "Figma") {
            path.style.stroke = getIconConfig.color[index];
          } else {
            path.style.stroke = color;
          }
        }
      });
    }
  };

  const handleOnBlur = (event) => {
    const target = event.target;
    const getIconConfig = iconConfig.find(
      (_, index) => index === Number(target.getAttribute("icon-index"))
    );

    const findPathToFill = Array.from(
      target.querySelectorAll(".icon-on-hover")
    );

    if (findPathToFill) {
      const styleType = getIconConfig?.type;

      findPathToFill.forEach((path: any) => {
        const currentColor = getComputedStyle(document.body).getPropertyValue(
          "--high-contrast-text-primary"
        );

        if (styleType === "fill") {
          setTimeout(() => {
            path.style.fill = null;
          }, 1000);
        } else if (styleType === "stroke") {
          setTimeout(() => {
            path.style.stroke = null;
          }, 1000);
        }
      });
    }
  };

  return (
    <div className="tech-icons-container">
      <h1 aria-label="Technologies I use" className="tech-icons-title">
        My Building Tools
      </h1>
      <div className="tech-icons">
        {iconConfig.map((icon, index) => {
          return (
            <div
              icon-index={index}
              onMouseEnter={handleOnHover}
              onMouseLeave={handleOnBlur}
              key={icon.name}
              className="tech-icon"
            >
              <span aria-hidden={true}>{icon.icon}</span>
              <span className="icon-name">{icon.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
