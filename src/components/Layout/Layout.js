import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, Header, Link, Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation>
          <Link to="/">Home </Link>
          <Link to="/movies"> Movies</Link>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
