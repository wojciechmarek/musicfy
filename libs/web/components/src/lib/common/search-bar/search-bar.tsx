import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { useState } from 'react';
import { HomeBar, LogoutButton, NavigationButton, NavigationButtons, NavigationLogout, NavigationSearch, SearchBarIcon, SearchInput } from './search-bar.styled';

/* eslint-disable-next-line */
export interface SearchBarProps {
  isNavigationButtonsVisible?: boolean;
  buttonLabel?: string;
  inputPlaceholder?: string;
  handleSearchInputChange?: (phrase: string) => void;
  handleButtonClick?: (phrase: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const {
    isNavigationButtonsVisible = false,
    buttonLabel = "Button's label",
    inputPlaceholder = "Input's placeholder",
    handleSearchInputChange,
    handleButtonClick,
  } = props;

  const [searchPhrase, setSearchPhrase] = useState('');

  const onInputChange = (phrase: string) => {
    setSearchPhrase(phrase);
    handleSearchInputChange?.(phrase);
  };

  const onButtonClick = () => {
    handleButtonClick?.(searchPhrase);
  };

  const onInputClear = () => {
    handleSearchInputChange?.('');
    setSearchPhrase('');
  };

  return (
    <HomeBar>
      {isNavigationButtonsVisible && (
        <NavigationButtons>
          <NavigationButton>
            <ChevronLeft />
          </NavigationButton>
          <NavigationButton>
            <ChevronRight />
          </NavigationButton>
        </NavigationButtons>
      )}
      <NavigationSearch>
        <SearchBarIcon>
          <Search />
        </SearchBarIcon>
        <SearchInput
          type="text"
          placeholder={inputPlaceholder}
          value={searchPhrase}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              onButtonClick();
            }}
        />
        {searchPhrase.length > 0 && (
          <SearchBarIcon onClick={() => onInputClear()}>
            <X />
          </SearchBarIcon>
        )}
      </NavigationSearch>
      <NavigationLogout>
        <LogoutButton onClick={onButtonClick}>{buttonLabel}</LogoutButton>
      </NavigationLogout>
    </HomeBar>
  );
}

export default SearchBar;
