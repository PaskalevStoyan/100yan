/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";
import { findParent, linksArray } from "../../utils";
import { ExpandIcon } from "../../icons/expand-icon";
import { LogoIcon } from "../../icons/logo-icon";

type NavbarProps = {
  shouldShow: boolean;
  scrollSelected: number;
};

export const Navbar = (props: NavbarProps) => {
  const { shouldShow, scrollSelected } = props;
  const [canSelectNavLink, setCanSelectNavLink] = React.useState(false);
  const navbar = document.querySelector(".navbar");

  const [links, setLinks] = React.useState(linksArray);

  const handleOnClick = (event: any) => {
    const target = event.target;

    if (window.innerWidth >= 870 || canSelectNavLink) {
      const getSection = document?.getElementById(
        `${target?.innerText?.replace(" ", "-")}`
      );

      if (getSection) {
        let scrollHeight =
          getSection.getBoundingClientRect().top + window.scrollY;

        if (getSection.id === "Projects") {
          scrollHeight -= 400;
        } else if (getSection.id === "Contacts") {
          scrollHeight -= 200;
        } else {
          scrollHeight = 0;
        }

        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      }

      if (target.classList.contains("navbar-link")) {
        const currentSelected = links.map((link) => {
          return {
            ...link,
            selected: link.text === target.innerText,
          };
        });

        setLinks(currentSelected);
      }
    }

    const expandIcon = findParent(target, "expand-icon");

    if (expandIcon) {
      navbar?.classList.toggle("expanded");

      if (canSelectNavLink) {
        navbar?.classList.remove("show-expand-text");

        setTimeout(() => {
          setCanSelectNavLink(!canSelectNavLink);
        }, 600);
      } else {
        setTimeout(() => {
          setCanSelectNavLink(!canSelectNavLink);
          navbar?.classList.add("show-expand-text");
        }, 600);
      }
    }
  };

  React.useEffect(() => {
    const updatedLinks = links.map((link, index) => {
      return {
        ...link,
        selected: index === scrollSelected,
      };
    });

    setLinks(updatedLinks);
  }, [scrollSelected]);

  return (
    <nav
      id=":0:-navigation"
      aria-expanded={window.innerWidth <= 870 ? canSelectNavLink : undefined}
      aria-hidden={window.innerWidth > 870 ? !shouldShow : undefined}
      onClick={handleOnClick}
      className={`${shouldShow ? "show" : "hide"} navbar`}
    >
      <span className="expand-icon">
        <ExpandIcon className={`${canSelectNavLink ? "active" : ""}`} />
      </span>

      {links.map((link, index) => {
        const logo = link.text === "logo";

        if (logo) {
          return <LogoIcon key={link.text} />;
        }
        return (
          <span
            aria-label={link.text}
            role="link"
            id={`:0:-navigation-${index - 1}`}
            aria-current={link.selected}
            key={link.text}
            className={`navbar-link ${link.selected ? "selected" : ""}`}
          >
            {link.text}
          </span>
        );
      })}
    </nav>
  );
};
