import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
