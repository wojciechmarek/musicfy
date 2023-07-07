import styled from '@emotion/styled';
import { RootState } from '@musicfy/web/store';
import { Play } from 'lucide-react';
import { useSelector } from 'react-redux';

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

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const TileImageContainer = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
`;

const TileImage = styled.img`
  width: 100%;
  border-radius: 0.5em;
`;

const TilePlayIcon = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  const { recommendations } = useSelector(
    (state: RootState) => state.suggestions
  );

  return (
    <RecommendationsContainer>
      <RecommendationsHeader>Today's recommendations</RecommendationsHeader>
      <RecommendationContent>
        <RecommendationList>
          {recommendations.map((item) => (
            <RecommendationElement key={item.id}>
              <TileImageContainer>
                <TileImage src={item.image} alt="Album cover" />
                <TilePlayIcon>
                  <Play size={24} />
                </TilePlayIcon>

              </TileImageContainer>
              <TileTitle>{item.title}</TileTitle>
              <TileSubtitle>{item.artist}</TileSubtitle>
            </RecommendationElement>
          ))}
        </RecommendationList>
      </RecommendationContent>
    </RecommendationsContainer>
  );
}

export default Recommendations;
