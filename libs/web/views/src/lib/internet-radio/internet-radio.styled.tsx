import styled from '@emotion/styled';

export const RadioContainer = styled.div`
  background-color: var(--background-color);
  height: 100%;
`;

export const RadioContent = styled.div`
  height: 100%;
  max-width: 1200px;
  padding: 1em;
  margin: 0 auto;
  overflow-y: auto;
`;

export const Header = styled.h1`
  color: var(--font-color);
  margin-top: 0.5em;
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

export const RadioAddStation = styled.div`
  margin-top: 1.5em;
`;
