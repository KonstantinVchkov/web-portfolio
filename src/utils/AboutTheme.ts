import { useThemeContext } from "../context/ThemeContext";

export const AboutBgTheme = () => {
  const { theme } = useThemeContext();
  const aboutBgTheme =
    theme === "light"
      ? "rgb(226 232 240)"
      : "radial-gradient(circle at 10% 20%, rgb(21, 21, 21) 0%, rgb(64, 64, 64) 90.2%)";
  const themeCn =
    theme === "light"
      ? "skill cta-btn cta-btn--hero"
      : "dark-skill cta-btn cta-btn--hero";
      return { aboutBgTheme, themeCn };
};
