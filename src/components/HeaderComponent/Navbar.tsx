import { useRef } from "react";
import { useState } from "react";
import { routes } from "../../data/routes";
import "./navbar.css";
import ToggleThemeButton from "../ThemeButton/ToggleThemeButton";
import { useThemeContext } from "../../context/ThemeContext";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {
  //
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const { theme } = useThemeContext();
  const changeCn = theme === "light" ? "navigation" : "darknavigation";
  return (
    <div className="header">
      <div className="social-media">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div className={changeCn}>
        <ul>
          {routes.map((nav, idx) => {
            return (
              <a key={idx} href={nav.href}>
                <li>{nav.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
      <div className="themeChange">
        <ToggleThemeButton />
      </div>
    </div>
  );
};
