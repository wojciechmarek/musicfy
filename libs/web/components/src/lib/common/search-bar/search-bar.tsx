import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { useState } from 'react';
import {
  HomeBar,
  LogoutButton,
  NavigationButton,
  NavigationButtons,
  NavigationLogout,
  NavigationSearch,
  SearchBarIcon,
  SearchInput,
} from './search-bar.styled';

/* eslint-disable-next-line */
export interface SearchBarProps {
  isNavigationButtonsVisible?: boolean;
  buttonLabel?: string;
  inputPlaceholder?: string;
  onSearchInputChange?: (phrase: string) => void;
  onButtonClick?: (phrase: string) => void;
  onClearClick?: () => void;
}

export function SearchBar(props: SearchBarProps) {
  const {
    isNavigationButtonsVisible = false,
    buttonLabel = "Button's label",
    inputPlaceholder = "Input's placeholder",
    onSearchInputChange,
    onButtonClick,
    onClearClick,
  } = props;

  const [searchPhrase, setSearchPhrase] = useState('');

  const handleInputChange = (phrase: string) => {
    setSearchPhrase(phrase);
    onSearchInputChange?.(phrase);
  };

  const handleButtonClick = () => {
    onButtonClick?.(searchPhrase);
  };

  const handleInputClear = () => {
    onSearchInputChange?.('');
    setSearchPhrase('');
    onClearClick?.();
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
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleButtonClick();
            if (e.key === 'Escape') handleInputClear();
          }}
        />
        {searchPhrase.length > 0 && (
          <SearchBarIcon onClick={() => handleInputClear()}>
            <X />
          </SearchBarIcon>
        )}
      </NavigationSearch>
      <NavigationLogout>
        <LogoutButton onClick={handleButtonClick}>{buttonLabel}</LogoutButton>
      </NavigationLogout>
    </HomeBar>
  );
}

export default SearchBar;
