import styled from '@emotion/styled';

export const ThemeSelectorContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const ThemeButton = styled.button<{
  isActive?: boolean;
}>`
  border: none;
  background-color: ${(props) =>
    props.isActive ? 'var(--accent-color)' : 'var(--tile-button-color)'};
  color: ${(props) =>
    props.isActive ? 'var(--font-accent-color)' : 'var(--font-color)'};
  box-shadow: ${(props) => (props.isActive ? '0 0 10px #2b31df' : 'none')};
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isActive
        ? 'var(--accent-hover-color)'
        : 'var(--tile-button-hover-color)'};
  }
`;
