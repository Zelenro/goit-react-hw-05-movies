import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieById } from 'api';

import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    async function fetchMovie() {
      try {
        setError(false);
        setLoading(true);
        const fetchedMovie = await fetchMovieById(movieId, controller.signal);
        setMovie(fetchedMovie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();

    return () => {
      controller.abort();
    };
  }, [movieId]);
  return <>{!loading && !error && <MovieDetailsItem movie={movie} />}</>;
}
