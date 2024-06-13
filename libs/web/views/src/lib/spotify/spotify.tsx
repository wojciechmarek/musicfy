import {
  Mood,
  Recommendations,
  SearchBar,
  Trending,
  WarningMessage,
} from '@musicfy/web/components';
import { RootState, setSearchPhrase } from '@musicfy/web/utils/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeContainer,
  HomeContent,
  HomeRegularviews,
  HomeSearchResultsviews,
  PopularAndMoodContainer,
} from './spotify.styled';

/* eslint-disable-next-line */
export interface SpotifyProps {}

export function Spotify(props: SpotifyProps) {
  const { isSpotifyAccessActive, isSearchActive } = useSelector(
    (state: RootState) => state.spotify
  );

  const dispatch = useDispatch();

  const handleSearchInputChange = (phrase: string) => {
    dispatch(setSearchPhrase(phrase));
  };

  const handleOnLogOffButtonClick = () => {
    alert("Log off");
  }

  return (
    <HomeContainer>
      {!isSpotifyAccessActive && <WarningMessage />}
      <HomeContent>
        <SearchBar
          isNavigationButtonsVisible={true}
          buttonLabel='Log off'
          handleSearchInputChange={(e) => handleSearchInputChange(e)}
          handleButtonClick={handleOnLogOffButtonClick}
        />
        {isSearchActive ? (
          <HomeSearchResultsviews>search</HomeSearchResultsviews>
        ) : (
          <HomeRegularviews>
            <Recommendations />
            <PopularAndMoodContainer>
              <Trending />
              <Mood />
            </PopularAndMoodContainer>
          </HomeRegularviews>
        )}
      </HomeContent>
    </HomeContainer>
  );
}
