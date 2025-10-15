import { CiMenuBurger } from "react-icons/ci";
import c from "./Menu.module.css";

const Menu = () => {
  return (
    <button className={c.menu}>
      <CiMenuBurger />
    </button>
  );
};

export default Menu;
