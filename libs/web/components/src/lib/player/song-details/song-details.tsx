import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SongDetailsProps {}

const PlayerMusicInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5em;
  gap: 1em;
`;

export const MusicThumbnail = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 0.5em;
  overflow: hidden;
`;

export const MusicThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MusicTitleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;

export const MusicTitle = styled.p`
  color: white;
  font-weight: bold;
  margin: 0;
`;

export const MusicAuthor = styled.p`
  color: white;
  font-size: 0.8em;
  margin: 0;
`;


export function SongDetails(props: SongDetailsProps) {
  return (
    <PlayerMusicInfo>
      <MusicThumbnail>
        <MusicThumbnailImage
          src="https://picsum.photos/300/300"
          alt="music thumbnail"
        />
      </MusicThumbnail>
      <MusicTitleAuthor>
        <MusicTitle>Make me up</MusicTitle>
        <MusicAuthor>Avicii</MusicAuthor>
      </MusicTitleAuthor>
    </PlayerMusicInfo>
  );
}

export default SongDetails;
