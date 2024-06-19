import styled from '@emotion/styled';

export const Button = styled.button`
  /* background-color: transparent;
  color: var(--font-color);
  cursor: pointer;
  width: 100%;
  height: 100%; */

  border: none;
  background-color: var(--tile-background-color);
  border-radius: 0.5em;
  padding: 0.75em;
  color: var(--font-color);
  width: 100%;
  height: 3em;
  cursor: pointer;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;
