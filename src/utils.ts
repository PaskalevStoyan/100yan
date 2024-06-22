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
    text: `with a passion for building beautiful and functional websites.
    I am a lifelong learner and enjoy working with new
    technologies.`,
    selected: true,
  },
  {
    title: "Career Path",
    text: "Career Text",
    selected: false,
  },
  {
    title: "Hobbies",
    text: "Hobby Text",
    selected: false,
  },
];
