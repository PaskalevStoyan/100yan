import React from "react";
import { Navbar } from "./components/navbar/navbar";
import "./App.css";
import { Showcase } from "./components/hero-section/showcase";
import { Container } from "./components/container/container";
import { ProjectSection } from "./components/projects-section/projects";
import { ShowTechIcons } from "./components/tech-icons/tech-icons";

function App() {
  const [shouldShowNavbar, setShouldShowNavbar] = React.useState(true);
  const [currentScrollPosition, setCurrentScrollPosition] = React.useState(0);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  const [selectedLink, setSelectedLink] = React.useState(1);
  
  React.useEffect(() => {
    const handleScroll = (event: any) => {
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

      if (window.scrollY < 1000) { 
        setSelectedLink(1);
      } else if (window.scrollY > 1000) { 
        setSelectedLink(2);
      } else {
        setSelectedLink(3);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldShowNavbar, currentScrollPosition, lastScrollPosition]);

  return (
    <div className="App">
      <div className="color-box-wrapper">
        <div className="color-box"></div>
      </div>
      <Navbar scrollSelected={selectedLink} shouldShow={shouldShowNavbar} />
      <Container>
        <Showcase />
        <ShowTechIcons />
        <ProjectSection />
      </Container>
    </div>
  );
}

export default App;
