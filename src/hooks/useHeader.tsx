import { useRef, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

const useHeader = () => {
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
  };
};

export default useHeader;
