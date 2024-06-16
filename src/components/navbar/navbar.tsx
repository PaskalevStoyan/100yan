/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";
import { linksArray } from "../../utils";

type NavbarProps = {
  shouldShow: boolean;
};

export const Navbar = (props: NavbarProps) => {
  const { shouldShow } = props;

  const [links, setLinks] = React.useState(linksArray);

  const handleOnClick = (event: any) => {
    const target = event.target;

    if (target.classList.contains("navbar-link")) {
      const currentSelected = links.map((link) => {
        return {
          ...link,
          selected: link.text === target.innerText,
        };
      });

      setLinks(currentSelected);
    }
  };
  return (
    <>
      <div
        role="navigation"
        onClick={handleOnClick}
        className={`${shouldShow ? "show" : "hide"} navbar`}
      >
        {links.map((link, index) => (
          <a
            aria-label={link.text}
            key={index}
            className={`${link.selected ? "selected" : null} navbar-link`}
            href="#"
          >
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};
