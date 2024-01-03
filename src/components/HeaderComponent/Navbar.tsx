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
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  const { theme } = useThemeContext();
  const changeCn = theme === "light" ? "navigation" : "darknavigation";

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
      <div className={changeCn}>
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
      <div className="themeChange">
        <ToggleThemeButton />
      </div>
    </div>
  );
};
