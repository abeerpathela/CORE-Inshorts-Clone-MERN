import React, { useState, useEffect, useContext } from 'react';
import { Box, Chip, Typography, useTheme } from '@mui/material';
import { getCategories } from '../service/api';
import { ThemeContext } from '../App';

const InfoHeader = () => {
  const [categories, setCategories] = useState([]);
  const { category, setCategory } = useContext(ThemeContext);
  const theme = useTheme();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(['all', ...response.data.categories]);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories(['all', 'general', 'sports', 'entertainment', 'politics', 'world', 'crime']);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 800,
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(45deg, #1976d2, #dc004e)'
            : 'linear-gradient(45deg, #90caf9, #f48fb1)',
          backgroundClip: 'text',
          textFillColor: 'transparent'
        }}
      >
        Stay Informed
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Discover the latest news in 60 words or less
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat.charAt(0).toUpperCase() + cat.slice(1)}
            onClick={() => setCategory(cat === 'all' ? '' : cat)}
            color={(cat === 'all' && !category) || cat === category ? 'primary' : 'default'}
            variant={((cat === 'all' && !category) || cat === category) ? 'filled' : 'outlined'}
            sx={{
              textTransform: 'capitalize',
              fontWeight: 600
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InfoHeader;
