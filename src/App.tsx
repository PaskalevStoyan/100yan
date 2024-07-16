import React from "react";
import { Navbar } from "./components/navbar/navbar";
import "./App.css";
import { Showcase } from "./components/hero-section/showcase";
import { Container } from "./components/container/container";
import { ProjectSection } from "./components/projects-section/projects";
import { ShowTechIcons } from "./components/tech-icons/tech-icons";
import { Contact } from "./components/contact-section/contact";
import { ThemeSwitch } from "./components/theme-switch/theme-switch";

function App() {
  const [shouldShowNavbar, setShouldShowNavbar] = React.useState(true);
  const [currentScrollPosition, setCurrentScrollPosition] = React.useState(0);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  const [selectedLink, setSelectedLink] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = (_: any) => {
      if (window.innerWidth > 870) {
        setCurrentScrollPosition(window.scrollY);

        if (currentScrollPosition > lastScrollPosition) {
          setTimeout(() => {
            setShouldShowNavbar(false);
          }, 100);
        } else {
          setTimeout(() => {
            setShouldShowNavbar(true);
          }, 100);
        }

        setLastScrollPosition(currentScrollPosition);
      }

      if (window.scrollY > 3150) {
        setSelectedLink(3);
      } else if (window.scrollY > 1000) {
        setSelectedLink(2);
      } else if (window.scrollY < 1000) {
        setSelectedLink(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldShowNavbar, currentScrollPosition, lastScrollPosition]);

  React.useEffect(() => {
    const theme = localStorage.getItem("100yan-theme");
  
    if (theme) {
      document.body.classList.add(`${theme}-theme`);
    } else {
      document.body.classList.add(`light-theme`);
    }
  }, []);

  return (
    <>
      <div className="App">
        <div className="color-box-wrapper">
          <div className="color-box"></div>
        </div>

        <div className="parallax-stars-bg">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        <Navbar scrollSelected={selectedLink} shouldShow={shouldShowNavbar} />

        <ThemeSwitch />

        <Container>
          <Showcase />
          <ShowTechIcons />
          <ProjectSection />
        </Container>
        <Contact />
      </div>
    </>
  );
}

export default App;
