import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import c from "./Network.module.css";

const Network = () => {
  return (
    <div className={c.netContainer}>
      <li className={c.network}>
        <a href="https://www.instagram.com/myday_beautystudio">
          <FaInstagramSquare />
        </a>
      </li>
      <li className={c.network}>
        <a href="https://t.me/myday_beautystudio">
          <FaTelegramPlane />
        </a>
      </li>
    </div>
  );
};

export default Network;
