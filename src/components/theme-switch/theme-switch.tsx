import React from "react";
import "./theme-switch.css";

export const ThemeSwitch = (props: any) => {
  const handleOnClick = (event: any) => {
    const target = event.target;

    // document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("100yan-theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      localStorage.setItem("100yan-theme", "dark");
    }
  };

  return (
    <div className="theme-container">
      <div onClick={handleOnClick} className="theme-slider">
        <div className="slider-ball"></div>
      </div>
    </div>
  );
};
