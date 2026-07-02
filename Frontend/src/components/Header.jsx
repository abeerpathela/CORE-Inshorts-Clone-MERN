import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Avatar,
  Tooltip,
  alpha,
  styled
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon
} from '@mui/icons-material';
import { ThemeContext } from '../App';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const { colorMode, mode, search, setSearch, setCategory, favorites } = useContext(ThemeContext);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleHomeClick = () => {
    setCategory('');
    setSearch('');
    setShowFavorites(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(30,30,30,0.8)',
        borderBottom: 1,
        borderColor: 'divider'
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              cursor: 'pointer'
            }}
            onClick={handleHomeClick}
          >
            Inshorts Clone
          </Typography>

          <Search sx={{ flexGrow: 1, maxWidth: 400, ml: 4 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search news…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleSearchChange}
            />
          </Search>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Home">
            <IconButton
              onClick={handleHomeClick}
              color={!showFavorites ? 'primary' : 'default'}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Favorites">
            <IconButton
              onClick={() => setShowFavorites(!showFavorites)}
              color={showFavorites ? 'secondary' : 'default'}
            >
              <FavoriteIcon />
              {favorites.length > 0 && (
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: '#dc004e',
                    color: 'white',
                    borderRadius: '50%',
                    width: 18,
                    height: 18,
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {favorites.length}
                </Box>
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Toggle Dark Mode">
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          <Avatar sx={{ ml: 1 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
