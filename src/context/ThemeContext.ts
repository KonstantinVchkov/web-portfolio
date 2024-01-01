import { createContext, useContext } from 'react'

interface DefaultContextValues {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

export const ThemeContext = createContext<DefaultContextValues>({
  toggleTheme: () => {},
  theme: 'light'
})

export const useThemeContext = () => useContext(ThemeContext)
