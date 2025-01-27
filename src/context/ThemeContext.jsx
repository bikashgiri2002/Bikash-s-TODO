import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
})

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.remove("light", "dark")
            document.querySelector('html').classList.add(theme)
          localStorage.setItem('theme', 'dark');
        } else {
            document.querySelector('html').classList.remove("light", "dark")
            document.querySelector('html').classList.add(theme)
          localStorage.setItem('theme', 'light');
        }
      }, [theme]);
      const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
};
export { ThemeProvider, ThemeContext };