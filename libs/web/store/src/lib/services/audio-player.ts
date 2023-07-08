import { useMemo } from 'react';
import song from './Gran Error x Elvana Gjata x ANTONIA - Clap Clap.mp3';

export const useAudioPlayer = () => {
  const audio = useMemo(() => new Audio(song), []);

  audio.addEventListener('timeupdate', () => {
    const songTime = audio.currentTime;
    const minutes = Math.floor(songTime / 60);
    const seconds = Math.floor(songTime % 60);
  });

  const play = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const stop = () => {
    audio.currentTime = 0;
    audio.pause();
  };

  return {
    play,
    stop,
  };


}