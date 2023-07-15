import styled from '@emotion/styled';
import { RootState, setUrl } from '@musicfy/web/store';
import { Play } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface DemoSongsProps {}

const DemoContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const DemoContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

const Header = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 1em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Song = styled.div`
  background-color: #2a2b30;
  border-radius: 0.5em;
  padding: 1em;
  color: white;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const SongImage = styled.div`
  height: 7em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }
`;

const SongInfo = styled.div`
  flex: 1;
  margin-left: 1em;
`;

const SongInfoTitle = styled.h3`
  margin: 0;
`;

const SongInfoDescription = styled.p`
  margin: 0;
`;

const SongInfoDuration = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #a0a0a0;
`;



const SongPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const PlayIconButton = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b31df;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  transition: background-color 0.2s ease-in-out;
  position: relative;

  &:hover {
    background-color: #4a4feb;
  }

  .icon {
    position: relative;
    left: 0.125em;
  }

`;

export function DemoSongs(props: DemoSongsProps) {
  const demoSongs = useSelector((state:RootState) => state.demo.songs);
  const dispatch = useDispatch();

  const onPlayClick = (id: string) => {
    const songToPlay = demoSongs.find((song) => song.id === id);
    if (songToPlay) {
      dispatch(setUrl(songToPlay.url));
    }
  }

  return (
    <DemoContainer>
      <DemoContent>
        <Header>Demo songs</Header>
        <Content>
          {demoSongs.map((song) => (
            <Song key={song.id}>
              <SongImage>
                <img src={song.cover} alt="Song Cover" />
              </SongImage>
              <SongInfo>
                <SongInfoTitle>{song.title}</SongInfoTitle>
                <SongInfoDescription>{song.artist}</SongInfoDescription>
                <SongInfoDuration>{song.duration}</SongInfoDuration>
              </SongInfo>
              <SongPlay>
                <PlayIconButton onClick={() => onPlayClick(song.id)}>
                  <Play size={20} className='icon' />
                </PlayIconButton>
              </SongPlay>
            </Song>
          ))}
        </Content>
      </DemoContent>
    </DemoContainer>
  );
}

export default DemoSongs;
