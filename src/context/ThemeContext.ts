import { createContext, useContext } from "react";
import { DefaultContextValues } from "../types/ProjectTypes";

export const ThemeContext = createContext<DefaultContextValues>({
  toggleTheme: () => {},
  theme: "light",
});

export const useThemeContext = () => useContext(ThemeContext);
