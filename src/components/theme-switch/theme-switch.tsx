import React from "react";
import "./theme-switch.css";
import { MoonIcon } from "../../icons/moon-icon";
import { SunIcon } from "../../icons/sun-icon";

export const ThemeSwitch = (props: any) => {
  const [icon, setIcon] = React.useState("");

  React.useEffect(() => {
    const theme = localStorage.getItem("100yan-theme");

    if (theme === "dark") {
      setIcon("moon");
    } else {
      setIcon("sun");
    }
  }, []);

  const handleOnClick = (event: any) => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");

      setTimeout(() => setIcon("sun"), 400);

      localStorage.setItem("100yan-theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");

      setTimeout(() => setIcon("moon"), 400);

      localStorage.setItem("100yan-theme", "dark");
    }
  };

  return (
    <div className="theme-container">
      <div onClick={handleOnClick} className="theme-slider">
        <div className="slider-ball">
          {icon === "moon" ? <MoonIcon /> : <SunIcon />}
        </div>
      </div>
    </div>
  );
};
