import styled from '@emotion/styled';

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
  border-radius: 0.5em;
  cursor: pointer;
  background-color: #2a2b32;
  padding: 0.25em 1em;
  width: 100%;
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
  margin-left: 2em;
`;

const RowTitle = styled.p`
  font-weight: bold;
  text-align: start;
  margin-left: 2em;
`;

const RowLenght = styled.p`
  font-size: 0.75rem;
  text-align: start;
`;

const RowDots = styled.p`
  font-size: 0.75rem;
  text-align: start;
`;

export function Popular(props: PopularProps) {
  return (
    <PopularContainer>
      <PopularHeader>
        Popular in Poland{' '}
        <span role="img" aria-label="Poland">
          🇵🇱
        </span>
      </PopularHeader>
      <PopularContent>
        <PopularList>
          {[1, 2, 3, 4, 5].map((item, key) => (
            <PopularElement>
              <RowImage>
                <img src="https://picsum.photos/300/300" alt="Album cover" />
              </RowImage>
              <RowNumber>{key + 1}</RowNumber>
              <RowTitle>Album</RowTitle>
              <RowLenght>Artist</RowLenght>
              <RowDots>Artist</RowDots>
            </PopularElement>
          ))}
        </PopularList>
      </PopularContent>
    </PopularContainer>
  );
}

export default Popular;
