import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getNews } from '../service/api';
import Article from './Article';
import { ThemeContext } from '../App';

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category, search, favorites, showFavorites } = useContext(ThemeContext);

  const fetchNews = useCallback(async (reset = false) => {
    try {
      setLoading(true);
      setError(null);
      const currentPage = reset ? 0 : page;
      const response = await getNews(currentPage, 5, category, search);
      const newNews = response.data.news;

      if (reset) {
        setNews(newNews);
      } else {
        setNews(prev => [...prev, ...newNews]);
      }
      setHasMore(response.data.hasMore);
      if (reset) setPage(1);
      else setPage(prev => prev + 1);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [page, category, search]);

  useEffect(() => {
    setPage(0);
    setNews([]);
    setHasMore(true);
    fetchNews(true);
  }, [category, search]);

  const displayNews = showFavorites ? favorites : news;

  return (
    <Box>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {showFavorites ? (
        displayNews.length > 0 ? (
          displayNews.map((article, index) => (
            <Article key={article.url || index} article={article} />
          ))
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No favorites yet. Start adding some!
            </Typography>
          </Box>
        )
      ) : (
        <InfiniteScroll
          dataLength={news.length}
          next={() => fetchNews(false)}
          hasMore={hasMore}
          loader={
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          }
          endMessage={
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body2" color="text.secondary">
                You've reached the end!
              </Typography>
            </Box>
          }
        >
          {news.length === 0 && !loading ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No news found. Try a different search or category.
              </Typography>
            </Box>
          ) : (
            news.map((article, index) => (
              <Article key={article.url || index} article={article} />
            ))
          )}
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default Articles;
