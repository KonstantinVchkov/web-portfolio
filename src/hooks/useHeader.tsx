import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const useHeader = () => {
  const { theme } = useThemeContext();
  const target = useRef(null);
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState("");
  const icon = theme === "light" ? faMoon : faSun;

  const changeCn = theme === "light" ? "navigation" : "darknavigation";
  const changeHambCn =
    theme === "light" ? "hamburger-menu" : "hamburger-menu-dark";
  const handleActive = (to: string) => {
    const isActive = window.location.hash === `#${to}`;

    setActiveClass(isActive ? "active" : "");
  };
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return {
    target,
    setShowNumber,
    showNumber,
    activeClass,
    changeCn,
    changeHambCn,
    setMenuOpen,
    menuOpen,
    handleActive,
    showScroll,
    icon,
  };
};

export default useHeader;
