import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SongDetailsProps {
  title: string;
  author: string;
  coverUrl: string;
}

const PlayerMusicInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-left: 1em;
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
  color: var(--font-accent-color);
  font-weight: bold;
  margin: 0;
`;

export const MusicAuthor = styled.p`
  color: var(--font-accent-color);
  font-size: 0.8em;
  margin: 0;
`;

export function SongDetails(props: SongDetailsProps) {
  const { title, author, coverUrl } = props;
  return (
    <PlayerMusicInfo>
      <MusicThumbnail>
        {coverUrl && (
          <MusicThumbnailImage src={coverUrl} alt="music thumbnail" />
        )}
      </MusicThumbnail>
      <MusicTitleAuthor>
        <MusicTitle>{title}</MusicTitle>
        <MusicAuthor>{author}</MusicAuthor>
      </MusicTitleAuthor>
    </PlayerMusicInfo>
  );
}

export default SongDetails;
