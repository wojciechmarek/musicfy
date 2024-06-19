import {
  RootState,
  setAudioSource,
  setTrack,
  setUrl,
} from '@musicfy/web/utils/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  Content,
  DemoContainer,
  DemoContent,
  Header,
} from './demo-songs.styled';
import { AddAudioTile, AudioTile } from '@musicfy/web/components';
import { AudioSource, Track } from '@musicfy/web/utils/models';

/* eslint-disable-next-line */
export interface DemoSongsProps {}

export function DemoSongs(props: DemoSongsProps) {
  const trackId = useSelector((state: RootState) => state.playback.track.id);
  const demoSongs = useSelector((state: RootState) => state.demo.songs);
  const audioSource = useSelector(
    (state: RootState) => state.playback.audio.source,
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

  const handleAddLocalFileClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
  };

  return (
    <DemoContainer>
      <DemoContent>
        <Header>Demo</Header>
        <Content>
          {demoSongs.map((song) => (
            <AudioTile
              key={song.id}
              title={song.title}
              description={song.artist}
              coverUrl={song.cover}
              isLiked={false}
              onHeartClick={() => {}}
              isPlaying={
                audioSource === AudioSource.DEMO && trackId === song.id
              }
              onPlayClick={() => handleOnPlayClick(song.id)}
            />
          ))}
          <AddAudioTile
            title="Open a local file"
            onAddClick={handleAddLocalFileClick}
          />
        </Content>
      </DemoContent>
    </DemoContainer>
  );
}

export default DemoSongs;
