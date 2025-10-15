import c from "./Hero.module.css";

import Network from "../Network/Network.jsx";

const Hero = () => {
  return (
    <div className={c.Hero}>
      <h1>Привіт, я косметолог, масажист з Одеси!</h1>
      <Network />
    </div>
  );
};

export default Hero;
