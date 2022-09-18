import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RecommendationsProps {}

const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RecommendationsHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1em 0 0.5em;
`;

const RecommendationContent = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`;

const RecommendationList = styled.ul`
  display: flex;
  justify-content: start;
  gap: 1em;
  padding: 0 0 1.5em;
`;

const RecommendationElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5em;
  cursor: pointer;
  width: 10em;
`;

const TileImage = styled.img`
  width: 100%;
  border-radius: 0.5em;
`;

const TileTitle = styled.p`
  font-weight: bold;
  text-align: start;
  margin: 0.5em 0 0;
`;

const TileSubtitle = styled.p`
  font-size: 0.75rem;
  text-align: start;
`;

export function Recommendations(props: RecommendationsProps) {
  return (
    <RecommendationsContainer>
      <RecommendationsHeader>Recommendations</RecommendationsHeader>
      <RecommendationContent>
        <RecommendationList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <RecommendationElement key={item}>
              <TileImage
                src={`https://picsum.photos/30${item}/300/`}
                alt="Album cover"
              />
              <TileTitle>Title no. {item}</TileTitle>
              <TileSubtitle>Artist #{item}</TileSubtitle>
            </RecommendationElement>
          ))}
        </RecommendationList>
      </RecommendationContent>
    </RecommendationsContainer>
  );
}

export default Recommendations;
