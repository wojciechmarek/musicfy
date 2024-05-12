import { AudioTile, SearchBar } from '@musicfy/web/components';
import {
  RootState,
  setAudioSource,
  setIsPlaying,
  setIsRepeatEnabled,
  setIsShuffleEnabled,
  setTrack,
  setUrl,
} from '@musicfy/web/utils/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  Content,
  Header,
  RadioContainer,
  RadioContent,
} from './internet-radio.styled';
import { AudioSource, Track } from '@musicfy/web/utils/models';

/* eslint-disable-next-line */
export interface InternetRadioProps {}

export function InternetRadio(props: InternetRadioProps) {
  const radioStations = useSelector((state: RootState) => state.radio.stations);
  const audioSource = useSelector(
    (state: RootState) => state.playback.audio.source
  );
  const trackId = useSelector((state: RootState) => state.playback.track.id);
  const isPlaying = useSelector((state: RootState) => state.playback.audio.isPlaying);

  const dispatch = useDispatch();

  const handleOnPlayClick = (id: number) => {
    if (audioSource === AudioSource.INTERNET_RADIO && trackId === id && isPlaying) {
      dispatch(setIsPlaying(false));
      return;
    }

    const radioToPlay = radioStations.find((radio) => radio.id === id);
    if (radioToPlay) {
      const track: Track = {
        id: radioToPlay.id,
        title: radioToPlay.title,
        artist: radioToPlay.description,
        coverUrl: radioToPlay.cover,
        duration: 0,
      };

      dispatch(setUrl(radioToPlay.url));
      dispatch(setIsPlaying(true));
      dispatch(setAudioSource(AudioSource.INTERNET_RADIO));
      dispatch(setIsShuffleEnabled(false));
      dispatch(setIsRepeatEnabled(false));
      dispatch(setTrack(track));
    }
  };

  const handleOnSearchStationButtonClick = (phrase: string) => {
    if (!phrase) {
      return;
    }
    const url = `https://fmstream.org/index.php?s=${phrase}`;
    window.open(url);
  }

  return (
    <RadioContainer>
      <RadioContent>
        <Header>Internet radio</Header>
        <SearchBar buttonLabel='Search' inputPlaceholder='Search a radio station' handleButtonClick={handleOnSearchStationButtonClick}></SearchBar>
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
                trackId === station.id &&
                isPlaying
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
