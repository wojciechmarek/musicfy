import {
  Mood,
  Recommendations,
  SearchBar,
  Trending,
  WarningMessage,
} from '@musicfy/web/components';
import { RootState, setSearchPhrase } from '@musicfy/web/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeContainer,
  HomeContent,
  HomeRegularView,
  HomeSearchResultsView,
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

  return (
    <HomeContainer>
      {!isSpotifyAccessActive && <WarningMessage />}
      <HomeContent>
        <SearchBar
          handleSearchInputChange={(e) => handleSearchInputChange(e)}
        />
        {isSearchActive ? (
          <HomeSearchResultsView>search</HomeSearchResultsView>
        ) : (
          <HomeRegularView>
            <Recommendations />
            <PopularAndMoodContainer>
              <Trending />
              <Mood />
            </PopularAndMoodContainer>
          </HomeRegularView>
        )}
      </HomeContent>
    </HomeContainer>
  );
}
