import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#fff";
  const backgroundColor =
    theme === "light"
      ? "radial-gradient( circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)"
      : "radial-gradient(circle at 10% 20%, rgb(21 21 21) 0%, rgb(64, 64, 64) 90.2%)";

  document.body.style.color = color;
  document.body.style.background = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
