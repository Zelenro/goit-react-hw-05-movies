import { fetchSearchMovie } from 'api';
import { ListMovies } from 'components/ListMovies/ListMovies';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function SearchMoviesPage() {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    const getApiInfo = async () => {
      try {
        if (searchQuery) {
          setQuery(searchQuery);
        }
        if (query !== '') {
          const searchMovieApi = await fetchSearchMovie(query);
          setSearchMovie(searchMovieApi);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getApiInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.target.elements.search.value);
  };

  const handleChange = evt => {
    setSearchParams({ query: evt.target.value });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="search" />
        <button type="submit">Search</button>
      </form>

      {searchMovie?.length > 0 ? (
        ((<Link to={location.state?.from ?? '/movies'}>Go back</Link>),
        (<ListMovies movies={searchMovie} location={location} />))
      ) : (
        <p>No results</p>
      )}
    </>
  );
}
