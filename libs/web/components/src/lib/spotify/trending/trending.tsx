import styled from '@emotion/styled';
import { RootState } from 'libs/web/utils/store/src';
import { Play, PlayCircle } from 'lucide-react';
import { useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface PopularProps {}

const PopularContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PopularHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1em 0 0.5em;
`;

const PopularContent = styled.div`
  display: flex;
  overflow-y: auto;
  width: 100%;
`;

const PopularList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1em;
  width: 100%;
`;

const PopularElement = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 0.5em;
  background-color: var(--tile-background-color);
  padding: 0.25em 1em;
  width: 100%;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;

const RowImage = styled.div`
  height: 2.5em;
  width: 2.5em;

  img {
    height: 100%;
    width: 100%;
    border-radius: 0.5em;
  }
`;

const RowNumber = styled.p`
  font-weight: bold;
  text-align: start;
  margin-left: 1.25em;
  width: 1.5em;
`;

const RowTitle = styled.p`
  font-weight: bold;
  text-align: start;
  margin-left: 1.25em;
  width: 7.5em;
  flex: 1;
`;

const RowLenght = styled.p`
  font-size: 0.75rem;
  text-align: start;
  margin-left: 1.25em;
  width: 2.5em;
`;

const RowPlayButton = styled.button`
  font-size: 0.75rem;
  text-align: start;
  margin-left: 1.25em;
  background-color: transparent;
  border: none;
  color: var(--font-color);
  cursor: pointer;
`;

export function Trending(props: PopularProps) {
  const { trending } = useSelector((state: RootState) => state.suggestions);

  return (
    <PopularContainer>
      <PopularHeader>
        Trending in Poland{' '}
        <span role="img" aria-label="Poland">
          🇵🇱
        </span>
      </PopularHeader>
      <PopularContent>
        <PopularList>
          {trending.map((item) => (
            <PopularElement key={item.id}>
              <RowImage>
                <img src={item.image} alt="Album cover" />
              </RowImage>
              <RowNumber>{item.id + 1}</RowNumber>
              <RowTitle>{item.title}</RowTitle>
              <RowLenght>{item.duration}</RowLenght>
              <RowPlayButton>
                <Play size={16} />
              </RowPlayButton>
            </PopularElement>
          ))}
        </PopularList>
      </PopularContent>
    </PopularContainer>
  );
}

export default Trending;
