import React from "react";
import "./navbar.css";

export const Navbar = (props: any) => {
  const { shouldShow } = props;

  return (
    <>
      (
      <div className={`${shouldShow ? "show" : "hide"} navbar`}>
        <a className="navbar-link selected" href="#">
          About Me
        </a>
        <a className="navbar-link" href="#">
          Projects
        </a>
        <a className="navbar-link" href="#">
          Contacts
        </a>
      </div>
      )
    </>
  );
};
