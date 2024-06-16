import React from "react";
import { Navbar } from "./components/navbar/navbar";
import "./App.css";
import { Showcase } from "./components/hero-section/showcase";
import { Container } from "./components/container/container";

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

  // TODO: add onScroll event to hide / show the navbar
  return (
    <div className="App">
      <Navbar shouldShow={shouldShowNavbar} />
      <Container>
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
      </Container>
    </div>
  );
}

export default App;
