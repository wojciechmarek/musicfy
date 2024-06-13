import {
  PlayButtons,
  PlayerShuffleButtonAction,
  ProgressBar,
  ShuffleButtons,
  SongDetails,
  VolumeButton,
} from '@musicfy/web/components';
import {
  PlayerContainer,
  PlayerContent,
  PlayerMusicInfoAndProgressContainer,
  PlayerVolumeContainer,
  VolumeBar,
} from './player.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  setIsMuted,
  setVolume,
  setisRepeatEnabled,
  setisShuffleEnabled,
  setIsPlaying,
  setSeekToTime,
} from '@musicfy/web/utils/store';
import { AudioSource } from '@musicfy/web/utils/models';

/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
  const dispatch = useDispatch();
  const { isMuted, level } = useSelector(
    (state: RootState) => state.playback.volume
  );

  const { isRepeatEnabled, isShuffleEnabled } = useSelector(
    (state: RootState) => state.playback.mode
  );

  const { isPlaying, currentTime, source } = useSelector(
    (state: RootState) => state.playback.audio
  );

  const { duration, coverUrl, artist, title } = useSelector((state: RootState) => state.playback.track);

  const handleMuteButtonClick = () => {
    if (isMuted) {
      dispatch(setIsMuted(false));
    } else {
      dispatch(setIsMuted(true));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    dispatch(setVolume(value));
  };

  const stop = () => {
    dispatch(setIsPlaying(false));
  };

  const play = () => {
    dispatch(setIsPlaying(true));
  };

  const handleShuffleButtonClick = (buttonType: PlayerShuffleButtonAction) => {
    switch (buttonType) {
      case PlayerShuffleButtonAction.Repeat:
        isRepeatEnabled
          ? dispatch(setisRepeatEnabled(false))
          : dispatch(setisRepeatEnabled(true));
        break;

      case PlayerShuffleButtonAction.Shuffle:
        isShuffleEnabled
          ? dispatch(setisShuffleEnabled(false))
          : dispatch(setisShuffleEnabled(true));
        break;

      default:
        break;
    }
  };

  const handleProgressBarChange = (value: number) => {
    dispatch(setSeekToTime(value));
  };

  return (
    <PlayerContainer>
      <PlayerContent>
        <SongDetails coverUrl={coverUrl} title={title} author={artist} />
        <PlayerMusicInfoAndProgressContainer>
          <PlayButtons
            isNavigationDisabled={source === AudioSource.INTERNET_RADIO}
            isPlaying={isPlaying}
            onClick={() => (isPlaying ? stop() : play())}
          />
          <ProgressBar
            isRadio={source === AudioSource.INTERNET_RADIO}
            currentTime={currentTime}
            totalTime={duration ? duration : 0}
            handleProgressBarChange={handleProgressBarChange}
          />
          <ShuffleButtons
            isDisabled={source === AudioSource.INTERNET_RADIO}
            isRepeatActive={isRepeatEnabled}
            isShuffleActive={isShuffleEnabled}
            onClick={(e) => handleShuffleButtonClick(e)}
          />
        </PlayerMusicInfoAndProgressContainer>
        <PlayerVolumeContainer>
          <VolumeButton
            onClick={() => handleMuteButtonClick()}
            isMuted={isMuted}
          />
          <VolumeBar
            isDisabled={isMuted}
            type="range"
            min="0"
            max="100"
            value={level}
            onChange={(e) => handleVolumeChange(e)}
          />
        </PlayerVolumeContainer>
      </PlayerContent>
    </PlayerContainer>
  );
};
