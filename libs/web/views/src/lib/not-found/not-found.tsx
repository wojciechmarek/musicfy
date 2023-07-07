import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NotFoundProps {}

const NotFoundContainer = styled.div`
  background-color: #1a1b20;
  height: 100vh;
`;

const NotFoundContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

const NotFoundText = styled.h1`
  font-size: 10em;
  font-weight: bold;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:nth-of-type(1) {
    color: #75f1ee;
    top: 49.5%;
    left: 49.5%;
  }

  &:nth-of-type(2) {
    color: #ea445a;
    top: 50.5%;
    left: 50.5%;
  }
`;

const NavLinkStyle = styled(Link)`
  display: flex;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 1em 1.5em;
  cursor: pointer;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;

  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    background-color: #2a2b32;
  }
`;

export function NotFound(props: NotFoundProps) {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundText>404</NotFoundText>
        <NotFoundText>404</NotFoundText>
        <NotFoundText>404</NotFoundText>

        <NavLinkStyle to="/">Go to home</NavLinkStyle>
      </NotFoundContent>
    </NotFoundContainer>
  );
}

export default NotFound;
