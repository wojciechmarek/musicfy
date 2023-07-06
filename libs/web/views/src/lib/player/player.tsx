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
  VolumeBarCurrent,
} from './player.styled';
import { useEffect, useMemo, useState } from 'react';
import song from './Gran Error x Elvana Gjata x ANTONIA - Clap Clap.mp3';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  setIsMuted,
  setVolume,
  setIsRepeating,
  setIsShuffling,
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

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const play = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const audio = useMemo(() => new Audio(song), []);

  useEffect(() => {
    setIsPlaying(isPlaying);
  }, [isPlaying]);

  audio.addEventListener('timeupdate', () => {
    setProgress((audio.currentTime / audio.duration) * 100);
    const songTime = audio.currentTime;
    const minutes = Math.floor(songTime / 60);
    const seconds = Math.floor(songTime % 60);
    setTime(audio.currentTime);
  });

  const stop = () => {
    audio.currentTime = 0;
    audio.pause();
  };

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
          <ProgressBar currentTime={time} totalTime={145} />
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
