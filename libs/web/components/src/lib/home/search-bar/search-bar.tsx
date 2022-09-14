import styled from '@emotion/styled';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

/* eslint-disable-next-line */
export interface SearchBarProps {}

const HomeBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 0.25em;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 0.25em;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  padding: 0.5em;
  transition: all 0.2s ease-in-out;
  color: #fff;
  border-radius: 0.5em;

  &:hover {
    background-color: #2a2b32;
  }
`;

const NavigationSearch = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 0.5em;
  background-color: #2a2b32;
  border-radius: 0.5em;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5em;
  padding: 0.5em 0.75em;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 1em;
  transition: all 0.2s ease-in-out;
  width: 100%;
  border: none;
  height: 100%;

  &:hover {
    background-color: #2a2b32;
  }
`;

const NavigationLogout = styled.div`
  display: flex;
  align-items: center;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  height: 100%;
  padding: 0 1.25em;
  transition: all 0.2s ease-in-out;
  margin-right: 0.5em;
  transition: all 0.2s ease-in-out;
  color: #fff;
  border-radius: 0.5em;

  &:hover {
    background-color: #2a2b32;
  }
`;

export function SearchBar(props: SearchBarProps) {
  return (
    <HomeBar>
      <NavigationButtons>
        <NavigationButton>
          <ChevronLeft />
        </NavigationButton>
        <NavigationButton>
          <ChevronRight />
        </NavigationButton>
      </NavigationButtons>
      <NavigationSearch>
        <SearchIcon>
          <Search />
        </SearchIcon>
        <SearchInput type="text" placeholder="Search music" />
      </NavigationSearch>
      <NavigationLogout>
        <LogoutButton>Logout</LogoutButton>
      </NavigationLogout>
    </HomeBar>
  );
}

export default SearchBar;
