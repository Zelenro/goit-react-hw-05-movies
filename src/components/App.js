import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import '../index.css';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const MovieDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const SearchMoviesPage = lazy(() => import('pages/SearchMoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
};
