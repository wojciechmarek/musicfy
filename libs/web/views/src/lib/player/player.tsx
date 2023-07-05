import {
  PlayButtons,
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

/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
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
          <ShuffleButtons />
        </PlayerMusicInfoAndProgressContainer>
        <PlayerVolumeContainer>
          <VolumeButton />
          <VolumeBar>
            <VolumeBarCurrent progress={67} />
          </VolumeBar>
        </PlayerVolumeContainer>
      </PlayerContent>
    </PlayerContainer>
  );
}

export default Player;
