import React from 'react';
import { useLocation, Link, Outlet, useNavigate } from 'react-router-dom';
import errorPosterImg from '../../img/photo-500x750.jpg';
import { MovieDetailsItemWrapper, Tittle, TittleWrapper } from './MovieDetailsItem.styled';

export const MovieDetailsItem = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : errorPosterImg;

  const year = release_date ? release_date.slice(0, 4) : release_date;
  const voteAverage = Math.round(vote_average * 10);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state.from ?? '/')
  }

  const location = useLocation();

  return (
    <main>
      <button onClick={handleGoBack}>Go back</button>
      <MovieDetailsItemWrapper>
            <img src={poster} alt="poster" width={250} />
      <TittleWrapper>
        <Tittle>
          {title} ({year})
        </Tittle>
        <p>User score: {voteAverage} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres && (
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{from:location?.state.from ?? '/'}}>Cast</Link>
          </li>
          <li>
            <Link to="reviews"  state={{from:location?.state.from ?? '/'}} >Reviews</Link>
          </li>
        </ul>
      </div>
        </TittleWrapper>
        </MovieDetailsItemWrapper>
      
      <Outlet />
     
    </main>
  );
};
