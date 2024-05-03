import styled from '@emotion/styled';

export const RadioContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

export const RadioContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 1.5em;
  overflow-y: auto;
`;

export const Header = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 1em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
