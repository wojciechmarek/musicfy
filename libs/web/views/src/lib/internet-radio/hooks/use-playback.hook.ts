import { AudioSource, Track } from '@musicfy/web/utils/models';
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

export const usePlayback = () => {
  const dispatch = useDispatch();

  const { stations } = useSelector((state: RootState) => state.radio);
  const { source } = useSelector((state: RootState) => state.playback.audio);
  const { isPlaying } = useSelector((state: RootState) => state.playback.audio);
  const { id: trackId } = useSelector(
    (state: RootState) => state.playback.track,
  );

  const handleOnPlaybackClick = (id: number) => {
    if (source === AudioSource.INTERNET_RADIO && trackId === id && isPlaying) {
      dispatch(setIsPlaying(false));
      return;
    }

    const radioToPlay = stations.find((radio) => radio.id === id);
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

  return {
    stations,
    source,
    isPlaying,
    trackId,
    handleOnPlaybackClick,
  };
};
