import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useHeader from "../../hooks/useHeader";
import { useThemeContext } from "../../context/ThemeContext";

const ToggleThemeButton = () => {
  const { icon } = useHeader();
  const { toggleTheme } = useThemeContext();
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
