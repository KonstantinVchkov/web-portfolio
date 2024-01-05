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
import { IoIosCall } from "react-icons/io";
import { Link } from "react-scroll";
import { FaGithub, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
export const Navbar = () => {
  const { theme } = useThemeContext();
  const changeCn = theme === "light" ? "navigation" : "darknavigation";
  const changeHambCn =
    theme === "light" ? "hamburger-menu" : "hamburger-menu-dark";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="header">
      <div className="social-media">
        <IoIosCall className="call" />
        <Link to={""}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to={""}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to={""}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to={""}>
          <FaGithub />
        </Link>
        <div className="line"></div>
      </div>
      <div className={`${menuOpen ? "hamburger-button" : `${changeCn}`}`}>
        {/* navigation menu - desktop version and mobile version*/}
        <div className={`${menuOpen && changeHambCn}`}>
          {menuOpen && (
            <IoClose
              className="close-hamb"
              onClick={() => setMenuOpen(false)}
            />
          )}
          <ul>
            {routes.map((nav, idx) => (
              <Link
                key={idx}
                to={nav.href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuOpen(false)}
              >
                <li>{nav.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* Hamburger Menu Button */}
      <div className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
      {/* Changing background color button */}
      <div className="themeChange">
        <ToggleThemeButton />
      </div>
    </div>
  );
};
