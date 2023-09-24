import { fetchMovieCast } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userIcon from '../../img/user-icon.png';
import { CastWrapper } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(response => {
        setCast(response);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : cast?.length > 0 ? (
        <div>
          <h2>Cast</h2>
          <CastWrapper>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  style={{ width: '150px' }}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                      : userIcon
                  }
                  alt={actor.name}
                />
                <h5>{actor.name}</h5>
                <p>{actor.character}</p>
              </li>
            ))}
          </CastWrapper>
        </div>
      ) : (
        <h5>Cast coming soon...</h5>
      )}
    </div>
  );
}
