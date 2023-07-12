import { createContext, useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = props => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || false
  );
  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
