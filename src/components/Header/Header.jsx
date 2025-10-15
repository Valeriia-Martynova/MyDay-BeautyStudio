import Menu from "../Menu/Menu";
import c from "./Header.module.css";
const Header = () => {
  return (
    <div className={c.headerContainer}>
      <img src="/src/assets/Logo.jpg" alt="Logo" width={180} />
      <Menu />
    </div>
  );
};

export default Header;
