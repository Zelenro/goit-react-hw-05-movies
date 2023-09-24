import React, { useEffect, useState } from 'react';
import { fetchTrendingMovieDay } from 'api';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function getDataApi() {
      try {
        const trendingMovies = await fetchTrendingMovieDay();

        setMovies(trendingMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }
    getDataApi();
    return () => {};
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ListMovies movies={movies} location={location} />
    </div>
  );
}
