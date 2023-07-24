import {
  AudioSource,
  RootState,
  setAudioSource,
  setTrack,
  setUrl,
} from '@musicfy/web/utility/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  Content,
  DemoContainer,
  DemoContent,
  Header,
} from './demo-songs.styled';
import { AudioTile } from '@musicfy/web/ui';
import { Track } from '@musicfy/web/utility/models';

/* eslint-disable-next-line */
export interface DemoSongsProps {}

export function DemoSongs(props: DemoSongsProps) {
  const trackId = useSelector((state: RootState) => state.playback.track.id);
  const demoSongs = useSelector((state: RootState) => state.demo.songs);
  const audioSource = useSelector(
    (state: RootState) => state.playback.audio.source
  );

  const dispatch = useDispatch();

  const handleOnPlayClick = (id: number) => {
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
      dispatch(setAudioSource(AudioSource.DEMO));
      dispatch(setTrack(trackDetails));
    }
  };

  return (
    <DemoContainer>
      <DemoContent>
        <Header>Demo</Header>
        <Content>
          {demoSongs.map((song) => (
            <AudioTile
              id={song.id}
              key={song.id}
              title={song.title}
              description={song.artist}
              coverUrl={song.cover}
              isPlaying={
                audioSource === AudioSource.DEMO &&
                trackId === song.id
              }
              onPlayClick={() => handleOnPlayClick(song.id)}
            />
          ))}
        </Content>
      </DemoContent>
    </DemoContainer>
  );
}

export default DemoSongs;
