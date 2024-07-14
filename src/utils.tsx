import React from "react";
import { TabsProps, Links } from "./interfaces";

export const linksArray: Array<Links> = [
  {
    text: "logo",
  },
  {
    text: "About Me",
    url: "#About-Me",
    selected: true,
  },
  {
    text: "Projects",
    url: "#Projects",
    selected: false,
  },
  {
    text: "Contacts",
    url: "#Contacts",
    selected: false,
  },
];

export const tabs: Array<TabsProps> = [
  {
    title: "About Me",
    text: (
      <p>
        Born and raised in Bulgaria and currently with 25 as my current age
        level, I'm what you call{" "}
        <span className="text-highlight">
          a builder of things around the Internet
        </span>{" "}
        or for short <span className="text-highlight">Front End Developer</span>
        . Those things are known as websites and my passion is to build
        beautiful, personal and functional websites
      </p>
    ),
    selected: true,
  },
  {
    title: "Building Journey",
    text: (
      <p>
        My journey inside the{" "}
        <span className="text-highlight">Programming World</span> began in 2017,{" "}
        which led to my first "
        <span className="text-highlight">Hello World</span>". In 18' I started
        pursuing my university degree in "
        <span className="text-highlight">Computer Science</span> and in 21' I
        started working as a Software Developer in{" "}
        <span className="text-highlight">Progress Software</span> with the
        mission to create beautiful web components.
      </p>
    ),
    selected: false,
  },
  {
    title: "Hobbies",
    text: (
      <p>
        When I'm not behind the keyboard, I'm usually found in the{" "}
        <span className="text-highlight">Gym</span>, mounted on a{" "}
        <span className="text-highlight">Snowboard</span> or taking care of my
        car - <span className="text-highlight">Honda Civic EJ6</span>. 15 years of my youth went in training as I was a professional{" "}
        <span className="text-highlight">Karateka</span> for the National Team Of Bulgaria.
      </p>
    ),
    selected: false,
  },
];

export const findParent = (element: HTMLElement, className: string) => {
  while (element.parentElement) {
    if (element.classList.contains(className)) {
      return element;
    }

    element = element.parentElement;
  }
};
