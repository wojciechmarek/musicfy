import styled from '@emotion/styled';
import { Item, ResultList } from '../../common';
import { CategoryChip } from './components';

type Props = {
  result: any;
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

export const SearchResult = (props: Props) => {
  const { result } = props;

  const categories = [
    'Top 5 results',
    'Songs',
    'Artists',
    'Albums',
    'Podcasts',
    'Spotify users',
  ];

  return (
    <SearchResultContent>
      <CategoryChips>
        {categories.map((chip, index) => (
          <CategoryChip title={chip} key={chip} isActive={index === 0} />
        ))}
      </CategoryChips>
      <ResultsContainer>
        <ResultList
          title="Songs"
          items={[
            ...result.tracks.items.slice(0, 5).map(
              (track: any) =>
                ({
                  header: track.data.name,
                  description: track.data.artists.items[0].profile.name,
                  imageUrl: track.data.albumOfTrack.coverArt.sources[1].url,
                  timeInSeconds: (
                    track.data.duration.totalMilliseconds / 1000
                  ).toString(),
                } as Item),
            ),
          ]}
        ></ResultList>
      </ResultsContainer>
      <ResultsContainer>
        <ResultList
          title="Artists"
          items={[
            ...result.artists.items.slice(0, 5).map(
              (artist: any) =>
                ({
                  header: artist.data.profile.name,
                  description: 'Band',
                  imageUrl: artist.data.visuals.avatarImage.sources[1].url,
                } as Item),
            ),
          ]}
        ></ResultList>
      </ResultsContainer>

      <ResultsContainer>
        <ResultList
          title="Albums"
          items={[
            ...result.albums.items.slice(0, 5).map(
              (item: any) =>
                ({
                  header: item.data.name,
                  description: item.data.artists.items[0].profile.name,
                  imageUrl: item.data.coverArt.sources[1].url,
                } as Item),
            ),
          ]}
        ></ResultList>
      </ResultsContainer>
    </SearchResultContent>
  );
};
