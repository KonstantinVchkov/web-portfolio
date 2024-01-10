import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../../context/ThemeContext";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();
  const icon = theme === "light" ? faMoon : faSun;

  return (
    <FontAwesomeIcon
      className="themeBtn"
      icon={icon}
      size="2x"
      onClick={toggleTheme}
    />
  );
};

export default ToggleThemeButton;
