import styled from '@emotion/styled';
import { Mood, Popular, Recommendations, SearchBar } from '@musicfy/web/components';

/* eslint-disable-next-line */
export interface HomeProps {}

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


export function Home(props: HomeProps) {
  return (
    <HomeContainer>
      <HomeContent>
        <SearchBar />
        <Recommendations />
        <PopularAndMoodContainer>
          <Popular />
          <Mood />
        </PopularAndMoodContainer>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
