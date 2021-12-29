/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export const ContextTheme = createContext({});

export function ContextThemeProvider({ children }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ContextTheme.Provider value={{ theme, toggleTheme }}>
        {children}
      </ContextTheme.Provider>
    </ThemeProvider>
  );
}
