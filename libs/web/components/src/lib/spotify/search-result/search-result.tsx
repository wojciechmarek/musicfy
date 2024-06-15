import styled from '@emotion/styled';
import { CategoryChip, ListHeader, ResultRow } from './components';

type TopResult = {
  name: string;
  label: string;
  imageUrl: string;
  onPlayClick: () => void;
};

type Props = {
  result: {
    topResult: string;
  };
};

const SearchResultContent = styled.div`
  margin-top: 1em;
`;

const CategoryChips = styled.div`
  margin-top: 0.5em;
  padding: 0.5em 0;
  display: flex;
  gap: 0.5em;
`;

export const ResultsContainer = styled.div`
  margin-top: 1em;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const SearchResult = (props: Props) => {
  const categories = [
    'Best results',
    'Songs',
    'Artists',
    'Albums',
    'Podcasts',
    'Spotify users',
  ];

  const songs = [
    {
      title: 'Perfect',
      description: 'Ed Sheeran',
      imageUrl:
        'https://i.scdn.co/image/ab67616d00004851cad4832cb7b5844343278daa',
    },
    {
      title: 'Perfect',
      description: 'Ed Sheeran',
      imageUrl:
        'https://i.scdn.co/image/ab67616d00004851cad4832cb7b5844343278daa',
    },
    {
      title: 'Perfect',
      description: 'Ed Sheeran',
      imageUrl:
        'https://i.scdn.co/image/ab67616d00004851cad4832cb7b5844343278daa',
    },
  ];
  return (
    <SearchResultContent>
      <CategoryChips>
        {categories.map((chip, index) => (
          <CategoryChip title={chip} key={chip} isActive={index === 0} />
        ))}
      </CategoryChips>
      <ResultsContainer>
        <ListHeader title="Songs" />
        <ResultsList>
          {songs.map((song) => (
            <ResultRow
              title={song.title}
              description={song.description}
              imageUrl={song.imageUrl}
            ></ResultRow>
          ))}
        </ResultsList>
      </ResultsContainer>
      <ResultsContainer>
        <ListHeader title="Artists" />
        <ResultsList>
          {songs.map((song) => (
            <ResultRow
              title={song.title}
              description={song.description}
              imageUrl={song.imageUrl}
            ></ResultRow>
          ))}
        </ResultsList>
      </ResultsContainer>

      <ResultsContainer>
        <ListHeader title="Albums" />
        <ResultsList>
          {songs.map((song) => (
            <ResultRow
              title={song.title}
              description={song.description}
              imageUrl={song.imageUrl}
            ></ResultRow>
          ))}
        </ResultsList>
      </ResultsContainer>
    </SearchResultContent>
  );
};
