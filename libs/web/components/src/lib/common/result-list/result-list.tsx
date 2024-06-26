import styled from '@emotion/styled';
import { ResultRow } from '../result-row/result-row';

export type Item = {
  imageUrl: string;
  header: string;
  description: string;
  timeInSeconds?: string;
  isPlaying: boolean;
  isLiked: boolean;
  onHeartClick: () => void;
  onPlaybackClick: () => void;
};

export type Props = {
  title: string;
  items: Item[];
};

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1em 0 0.5em;
`;

export const ResultList = (props: Props) => {
  const { items, title } = props;

  return (
    <>
      <Title>{title}</Title>
      <ResultsList>
        {items.length === 0
          ? 'No items'
          : items.map((item) => (
              <ResultRow
                key={item.header + item.header}
                title={item.header}
                description={item.description}
                imageUrl={item.imageUrl}
                isLiked={item.isLiked}
                isPlaying={item.isPlaying}
                onHeartClick={item.onHeartClick}
                onPlaybackClick={item.onPlaybackClick}
              ></ResultRow>
            ))}
      </ResultsList>
    </>
  );
};
