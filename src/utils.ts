import { CardInfo, Links } from "./interfaces";

export const linksArray: Array<Links> = [
  {
    text: "logo",
  },
  {
    text: "About Me",
    url: "#",
    selected: true,
  },
  {
    text: "Projects",
    url: "#",
    selected: false,
  },
  {
    text: "Contacts",
    url: "#",
    selected: false,
  },
];

export const cardsInfo: Array<CardInfo> = [
  {
    title: "About Me",
    text: [
      `Born and raised in Dobrich, Bulgaria and with 25 as my current age level, I\'m what you call <span className="text-highlight">a builder of things around the Internet</span> or for short <span className="text-highlight">Front End Developer</span>. Those things are known as websites and my passion is to build beautiful, personal and functional websites.`,
    ],
    selected: true,
  },
  {
    title: "Career Path",
    text: [
      'My journey began <span className="text-highlight">around 2017</span> and since then my fingers are bind to a keyboard. In 2018 I started my Bachelor Degree in New Bulgarian University. Since 2021 i\'ve been working in Progress Software as a Software Developer.',
      "GOSHKO",
      "TSOHK",
    ],
    selected: false,
  },
  {
    title: "Hobbies",
    text: ["Hobby Text"],
    selected: false,
  },
];

export const findParent = (element: HTMLElement) => {
  while (element.parentElement) {
    if (element.classList.contains("card-item")) {
      return element;
    }

    element = element.parentElement;
  }
};