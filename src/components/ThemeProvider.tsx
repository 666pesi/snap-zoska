"use client"; // This marks the component as a client component

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material'; // Removed unused imports
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

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
        main: isDarkMode ? '#673ab7' : '#1976d2', // A more balanced purple and blue primary color
      },
      secondary: {
        main: '#f50057', // A vivid pink color for secondary elements
      },
      background: {
        default: isDarkMode ? '#121212' : '#fafafa',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#000000',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: isDarkMode ? '#9c27b0' : '#1565c0', // Custom hover color
            },
            borderRadius: '8px',  // Rounded corners for buttons
            padding: '8px 16px',  // Padding for buttons
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)', // Subtle hover effect
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
        <CssBaseline /> {/* Apply global CSS reset */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh', // Full viewport height
          position: 'relative',
        }}>
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
