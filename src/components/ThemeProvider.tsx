"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#800080' : '#9b27b0',
        light: '#ba68c8',
        dark: '#4a0072',
      },
      secondary: {
        main: isDarkMode ? '#b11226' : '#dc143c',
        light: '#e57373',
        dark: '#880000',
      },
      background: {
        default: isDarkMode ? '#1e1e1e' : '#f8f4f9',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#2d2d2d',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: isDarkMode ? '#9b1b30' : '#d81b60',
            },
            borderRadius: '10px',
            padding: '10px 20px',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
    },
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
