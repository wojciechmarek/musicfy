import styled from '@emotion/styled';
import {
  Mood,
  Recommendations,
  SearchBar,
  Trending,
} from '@musicfy/web/components';
import { RootState, setSearchPhrase } from '@musicfy/web/store';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface SpotifyProps {}

const HomeContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const HomeContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

const PopularAndMoodContainer = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

const HomeSearchResultsView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

const HomeRegularView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export function Spotify(props: SpotifyProps) {
  const { isSearchActive } = useSelector(
    (state: RootState) => state.search
  );

  const dispatch = useDispatch();

  const handleSearchInputChange = (phrase: string) => {
    dispatch(setSearchPhrase(phrase));
  };
  
  return (
    <HomeContainer>
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