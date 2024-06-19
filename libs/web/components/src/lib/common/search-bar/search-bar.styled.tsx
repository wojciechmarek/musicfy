import styled from '@emotion/styled';

export const HomeBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 0;
  gap: 0.5em;
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 0.25em;
`;

export const NavigationButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  color: var(--font-color);
  background-color: var(--tile-background-color);

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;

export const NavigationSearch = styled.div`
  background-color: var(--tile-background-color);
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 0.5em;
`;

export const SearchBarIcon = styled.div`
  display: flex;
  align-items: center;
  color: var(--font-color);
  font-size: 1.5em;
  padding: 0.5em 0.75em;

  &:nth-of-type(2) {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: var(--font-color);
  font-size: 1em;
  width: 100%;
  border: none;
  height: 100%;
  padding-left: 0.5em;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;

export const NavigationLogout = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  background-color: var(--tile-background-color);
  border: none;
  color: var(--font-color);
  cursor: pointer;
  font-size: 1em;
  height: 100%;
  padding: 0 1.25em;
  color: var(--font-color);
  border-radius: 0.5em;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;
