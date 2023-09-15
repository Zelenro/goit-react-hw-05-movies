import { Link, useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();
  return (
    <div>
      <Link to="/" state={{ from: location }}>
        <h1>Trending Movies</h1>
      </Link>
    </div>
  );
}
