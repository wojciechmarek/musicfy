import { AudioTile } from '@musicfy/web/components';
import {
  AudioSource,
  RootState,
  Track,
  setAudioSource,
  setIsPlaying,
  setIsRadio,
  setIsRepeating,
  setIsShuffling,
  setTrack,
  setUrl,
} from '@musicfy/web/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  Content,
  Header,
  RadioContainer,
  RadioContent,
} from './internet-radio.styled';

/* eslint-disable-next-line */
export interface InternetRadioProps {}

export function InternetRadio(props: InternetRadioProps) {
  const radioStations = useSelector((state: RootState) => state.radio.stations);
  const audioSource = useSelector(
    (state: RootState) => state.playback.audio.source
  );
  const trackId = useSelector((state: RootState) => state.playback.track.id);

  const dispatch = useDispatch();

  const handleOnPlayClick = (id: number) => {
    const radioToPlay = radioStations.find((radio) => radio.id === id);
    if (radioToPlay) {
      const track: Track = {
        id: radioToPlay.id,
        title: radioToPlay.title,
        artist: radioToPlay.description,
        coverUrl: radioToPlay.cover,
      };

      dispatch(setUrl(radioToPlay.url));
      dispatch(setIsPlaying(true));
      dispatch(setAudioSource(AudioSource.INTERNET_RADIO));
      dispatch(setIsShuffling(false));
      dispatch(setIsRepeating(false));
      dispatch(setTrack(track));
    }
  };

  return (
    <RadioContainer>
      <RadioContent>
        <Header>Internet radio</Header>
        <Content>
          {radioStations.map((station) => (
            <AudioTile
              id={station.id}
              key={station.id}
              title={station.title}
              description={station.description}
              coverUrl={station.cover}
              isPlaying={
                audioSource === AudioSource.INTERNET_RADIO &&
                trackId === station.id
              }
              onPlayClick={() => handleOnPlayClick(station.id)}
            />
          ))}
        </Content>
      </RadioContent>
    </RadioContainer>
  );
}

export default InternetRadio;
