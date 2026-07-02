import React, { useState, createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';

export const ThemeContext = createContext(null);

function App() {
  const [mode, setMode] = useState('light');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#dc004e',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#ffffff',
                },
              }
            : {
                primary: {
                  main: '#90caf9',
                },
                secondary: {
                  main: '#f48fb1',
                },
                background: {
                  default: '#0a0a0a',
                  paper: '#1e1e1e',
                },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      }),
    [mode]
  );

  const toggleFavorite = (article) => {
    let newFavorites;
    if (favorites.some(fav => fav.url === article.url)) {
      newFavorites = favorites.filter(fav => fav.url !== article.url);
    } else {
      newFavorites = [...favorites, article];
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (articleUrl) => {
    return favorites.some(fav => fav.url === articleUrl);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, mode, category, setCategory, search, setSearch, showFavorites, setShowFavorites, favorites, toggleFavorite, isFavorite }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Header />
          <Box sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, margin: '0 auto', pt: 12, pb: 4 }}>
            <InfoHeader />
            <Articles />
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
