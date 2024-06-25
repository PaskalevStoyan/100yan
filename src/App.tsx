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

  React.useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldShowNavbar, currentScrollPosition, lastScrollPosition]);

  return (
    <div className="App">
      <Navbar shouldShow={shouldShowNavbar} />
      <Container>
        <Showcase />
        <ShowTechIcons />
        <ProjectSection />
      </Container>
    </div>
  );
}

export default App;
