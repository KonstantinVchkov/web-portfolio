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
import { useState } from "react";
export const Navbar = () => {
  const { theme } = useThemeContext();
  const changeCn = theme === "light" ? "navigation" : "darknavigation";
  const [menuOpen, setMenuOpen] = useState(false);
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
      {/* {menuOpen ? (
        <div className="hamburger-menu">
          Hamburger menu
          <ul>
            {routes.map((nav, idx) => (
              <Link
                to={nav.href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                key={idx}
              >
                <li>{nav.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className={changeCn}>
          navigation menu - desktop version
          <ul>
            {routes.map((nav, idx) => (
              <Link
                key={idx}
                to={nav.href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <li>{nav.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      )} */}
      <div className={`${menuOpen ? "hamburger-button" : `${changeCn}`}`}>
        {/* navigation menu - desktop version */}
        <div className={` ${menuOpen && "hamburger-menu"}`} style={{background: theme === 'light' ? 'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)' : 'radial-gradient(circle at 10% 20%, rgb(21 21 21) 0%, rgb(64, 64, 64) 90.2%)'}}>
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
