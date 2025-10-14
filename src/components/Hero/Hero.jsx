import c from "./Hero.module.css";
import Menu from "../Menu/Menu.jsx";
import Network from "../Network/Network.jsx";

const Hero = () => {
  return (
    <div className={c.Hero}>
      <Menu />
      <h1>Hero</h1>
      <Network />
    </div>
  );
};

export default Hero;
