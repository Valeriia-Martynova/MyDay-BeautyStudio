import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import MyServices from "./components/MyServices/MyServices.jsx";
import MyReviews from "./components/MyReviews/MyReviews.jsx";
import Process from "./components/Process/Process.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <MyServices />
      <MyReviews />
      <Process />
      <FAQ />
    </div>
  );
}

export default App;
