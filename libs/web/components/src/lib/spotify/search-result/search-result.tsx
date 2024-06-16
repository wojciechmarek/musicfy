import styled from '@emotion/styled';
import { CategoryChip, Item, ResultList } from './components';
import { SectionTitle } from '../../common';

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
        <SectionTitle title="Songs" />
        <ResultList
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
        <SectionTitle title="Artists" />
        <ResultList
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
        <SectionTitle title="Albums" />
        <ResultList
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
