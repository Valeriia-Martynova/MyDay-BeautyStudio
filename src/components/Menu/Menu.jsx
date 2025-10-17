import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import c from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={c.menuContainer}>
      <button className={c.menuButton} onClick={toggleMenu}>
        <CiMenuBurger />
      </button>

      {isOpen && (
        <ul className={c.menuList}>
          <li>
            <a href="#MyServices" onClick={closeMenu}>
              Послуги
            </a>
          </li>
          <li>
            <a href="#Price" onClick={closeMenu}>
              Прайс
            </a>
          </li>
          <li>
            <a href="#MyReviews" onClick={closeMenu}>
              Відгуки
            </a>
          </li>
          <li>
            <a href="#Process" onClick={closeMenu}>
              Процес роботи
            </a>
          </li>
          <li>
            <a href="#FAQ" onClick={closeMenu}>
              Часті запитання
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
