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
  setIsRepeating,
  setIsShuffling,
  setIsPlaying,
} from '@musicfy/web/store';

/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
  const dispatch = useDispatch();
  const { isMuted, level } = useSelector(
    (state: RootState) => state.playback.volume
  );

  const { isRepeating, isShuffling } = useSelector(
    (state: RootState) => state.playback.mode
  );

  const isPlaying  = useSelector(
    (state: RootState) => state.playback.isPlaying
  );

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
        isRepeating
          ? dispatch(setIsRepeating(false))
          : dispatch(setIsRepeating(true));
        break;

      case PlayerShuffleButtonAction.Shuffle:
        isShuffling
          ? dispatch(setIsShuffling(false))
          : dispatch(setIsShuffling(true));
        break;

      default:
        break;
    }
  };

  return (
    <PlayerContainer>
      <PlayerContent>
        <SongDetails />
        <PlayerMusicInfoAndProgressContainer>
          <PlayButtons
            isPlaying={isPlaying}
            onClick={() => (isPlaying ? stop() : play())}
          />
          <ProgressBar currentTime={123} totalTime={145} />
          <ShuffleButtons
            isRepeatActive={isRepeating}
            isShuffleActive={isShuffling}
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
}

export default Player;
