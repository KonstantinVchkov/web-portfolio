import { routes } from "../../data/routes";
import "../../styles/navbar-style.css";
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
import { useRef, useState } from "react";
import { TNavbar } from "../../types/ProjectTypes";

export const Navbar = ({
  mobile,
  github,
  linkedIn,
  instagram,
  facebook,
}: TNavbar) => {
  const { theme } = useThemeContext();
  const target = useRef(null);
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState("");
  const changeCn = theme === "light" ? "navigation" : "darknavigation";
  const changeHambCn =
    theme === "light" ? "hamburger-menu" : "hamburger-menu-dark";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleActive = (to: string) => {
    const isActive = window.location.hash === `#${to}`;

    setActiveClass(isActive ? "active" : "");
  };
  return (
    <div className="header">
      <div className="social-media">
        <div ref={target} className="call-box">
          <IoIosCall
            className="call"
            onClick={() => setShowNumber(!showNumber)}
          />
          {showNumber && <span className="number">{mobile}</span>}
        </div>
        <a href={`${instagram}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={facebook} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
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
                activeClass={activeClass}
                onSetActive={() => handleActive(nav.hash)}
                key={idx}
                to={`${nav.hash}`}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                hashSpy={true}
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
