import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 12px;
`;

export const Header = styled.header`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
export const Navigation = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 4px;
  /* text-decoration: none; */
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: blue;
  }
`;
