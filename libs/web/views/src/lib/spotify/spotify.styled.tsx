import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

export const HomeContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 1.5em;
  overflow-y: auto;
`;

export const PopularAndMoodContainer = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const HomeSearchResultsviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const HomeRegularviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

