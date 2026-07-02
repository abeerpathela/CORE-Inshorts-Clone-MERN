import React, { useContext } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
  Link,
  useTheme
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  OpenInNew as OpenInNewIcon
} from '@mui/icons-material';
import { ThemeContext } from '../App';

const Article = ({ article }) => {
  const theme = useTheme();
  const { toggleFavorite, isFavorite } = useContext(ThemeContext);

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.palette.mode === 'light'
            ? '0 10px 40px rgba(0,0,0,0.1)'
            : '0 10px 40px rgba(0,0,0,0.3)'
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <CardMedia
          component="img"
          image={article.url}
          alt={article.title}
          sx={{
            width: { xs: '100%', md: 300 },
            height: { xs: 200, md: 250 },
            objectFit: 'cover'
          }}
        />

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <CardContent sx={{ flex: 1, pb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              {article.category && (
                <Chip
                  label={article.category}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ textTransform: 'capitalize', fontWeight: 600 }}
                />
              )}
              <Typography variant="caption" color="text.secondary">
                by {article.author} • {new Date(article.timestamp).toLocaleDateString()}
              </Typography>
            </Box>

            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              sx={{ fontWeight: 700, lineHeight: 1.3 }}
            >
              {article.title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {article.description}
            </Typography>
          </CardContent>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              pb: 2
            }}
          >
            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
            >
              Read more at {article.publisher}
              <OpenInNewIcon fontSize="small" />
            </Link>

            <IconButton
              onClick={() => toggleFavorite(article)}
              color={isFavorite(article.url) ? 'secondary' : 'default'}
              sx={{
                '&:hover': {
                  transform: 'scale(1.1)'
                },
                transition: 'transform 0.2s ease'
              }}
            >
              {isFavorite(article.url) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Article;
