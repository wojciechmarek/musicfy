import styled from "@emotion/styled";

export const HomeBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 0.25em;
  gap: 0.5em
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 0.25em;
`;

export const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  padding: 0.5em;
  transition: all 0.2s ease-in-out;
  color: #fff;
  border-radius: 0.25em;

  &:hover {
    background-color: #2a2b32;
  }
`;

export const NavigationSearch = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  background-color: #2a2b32;
  border-radius: 0.5em;
`;

export const SearchBarIcon = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
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
  color: #fff;
  font-size: 1em;
  transition: all 0.2s ease-in-out;
  width: 100%;
  border: none;
  height: 100%;
  padding-left: 0.5em;

  &:hover {
    background-color: #2a2b32;
  }
`;

export const NavigationLogout = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  height: 100%;
  padding: 0 1.25em;
  transition: all 0.2s ease-in-out;
  color: #fff;
  border-radius: 0.5em;

  &:hover {
    background-color: #2a2b32;
  }
`;
