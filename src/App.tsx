import React from "react";
import { Navbar } from "./components/navbar/navbar";
import "./App.css";
import { Showcase } from "./components/hero-section/showcase";
import { Container } from "./components/container/container";

function App() {
  const [shouldShowNavbar, setShouldShowNavbar] = React.useState(true);

  // TODO: add onScroll event to hide / show the navbar
  return (
    <div className="App">
      <Navbar shouldShow={shouldShowNavbar} />
      <Container>
        <Showcase />
      </Container>
    </div>
  );
}

export default App;
