import { RootState, Track, setAudioSource, setIsRadio, setTrack, setUrl } from '@musicfy/web/store';
import { Play } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Content, DemoContainer, DemoContent, Header, PlayIconButton, Song, SongImage, SongInfo, SongInfoDescription, SongInfoDuration, SongInfoTitle, SongPlay } from './demo-songs copy';

/* eslint-disable-next-line */
export interface DemoSongsProps {}


export function DemoSongs(props: DemoSongsProps) {
  const demoSongs = useSelector((state:RootState) => state.demo.songs);
  const dispatch = useDispatch();

  const onPlayClick = (id: number) => {
    const songToPlay = demoSongs.find((song) => song.id === id);
    if (songToPlay) {
      const trackDetails: Track = {
        id: songToPlay.id,
        title: songToPlay.title,
        artist: songToPlay.artist,
        coverUrl: songToPlay.cover,
        duration: songToPlay.duration,
      };

      dispatch(setUrl(songToPlay.url));
      dispatch(setIsRadio(false));
      dispatch(setAudioSource("demo"));
      dispatch(setTrack(trackDetails));
    }
  }

  return (
    <DemoContainer>
      <DemoContent>
        <Header>Demo</Header>
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
