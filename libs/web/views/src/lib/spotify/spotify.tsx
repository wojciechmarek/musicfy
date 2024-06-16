import {
  Mood,
  Recommendations,
  SearchBar,
  SearchResult,
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
import axios from 'axios';
import { response } from './response';

/* eslint-disable-next-line */
export interface SpotifyProps {}

export function Spotify(props: SpotifyProps) {
  const { isSpotifyAccessActive, isSearchActive } = useSelector(
    (state: RootState) => state.spotify,
  );

  const dispatch = useDispatch();

  const handleSearchInputChange = (phrase: string) => {
    dispatch(setSearchPhrase(phrase));
  };

  const handleSearchButtonClick = async (phrase: string) => {
    dispatch(setSearchPhrase(phrase));
    // const options = {
    //   method: 'GET',
    //   url: import.meta.env.VITE_SPOTIFY_RAPID_API_URL,
    //   params: {
    //     q: phrase,
    //     type: 'multi',
    //     offset: '0',
    //     limit: '10',
    //     numberOfTopResults: '5',
    //   },
    //   headers: {
    //     'x-rapidapi-key': import.meta.env.VITE_SPOTIFY_X_RAPID_API_KEY,
    //     'x-rapidapi-host': import.meta.env.VITE_SPOTIFY_X_RAPID_API_HOST,
    //   },
    // };
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleClearSearchClick = () => {
    dispatch(setSearchPhrase(''));
  };

  return (
    <HomeContainer>
      {!isSpotifyAccessActive && <WarningMessage />}
      <HomeContent>
        <SearchBar
          isNavigationButtonsVisible={true}
          buttonLabel="Search"
          inputPlaceholder="Search a song"
          onButtonClick={handleSearchButtonClick}
          onClearClick={handleClearSearchClick}
        />
        {isSearchActive ? (
          <SearchResult result={response}></SearchResult>
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
