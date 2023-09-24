import { fetchMovieReviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(response => {
        setReviews(response);
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
      ) : reviews?.length > 0 ? (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h5>Author: {author}</h5>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h5>Reviews coming soon...</h5>
      )}
    </div>
  );
}
