import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  setCurrentTime,
  setFrequencies,
  setTrackDuration,
} from '@musicfy/web/store';
import song from './Gran Error x Elvana Gjata x ANTONIA - Clap Clap.mp3';
import { useEffect, useRef } from 'react';

export function AudioPlayerService() {
  const dispatch = useDispatch();
  const { seekToTime, isPlaying } = useSelector((state: RootState) => state.playback.audio);
  const { level, isMuted } = useSelector((state: RootState) => state.playback.volume);

  const songTimeInSeconds = useRef(0);

  // SOUND OBJECT
  const audio = useRef<HTMLAudioElement>(new Audio(song));

  // EVENT LISTENERS
  audio.current.addEventListener('timeupdate', () => {
    const songTime = audio.current.currentTime;
    const currentSongTimeInSeconds = Math.floor(songTime);

    if (currentSongTimeInSeconds > songTimeInSeconds.current) {
      songTimeInSeconds.current = currentSongTimeInSeconds;
      dispatch(setCurrentTime(currentSongTimeInSeconds));
    }
  });

  // AUDIO PROCESSING
  const audioCtx = new window.AudioContext();
  // const audioSrc = audioCtx.createMediaElementSource(audio.current);
  // const analyser = audioCtx.createAnalyser();
  // // Bind analyser to media element source.
  // audioSrc.connect(analyser);
  // audioSrc.connect(audioCtx.destination);
  // const timeDomainData = new Uint8Array(11);

  // --- EFFECTS ---
  // PLAY/PAUSE and setInterval to update to played time
  useEffect(() => {
    if (isPlaying) {
      audio.current.play();

      const songDuration = audio.current.duration;
      const songDurationInSeconds = Math.floor(songDuration);
      dispatch(setTrackDuration(songDurationInSeconds));

      // setInterval(() => {
      //   // analyser.getByteTimeDomainData(timeDomainData);
      //   // dispatch(setFrequencies(Array.from(timeDomainData)));
      // }, 70);
    } else {
      audio.current.pause();
    }
  }, [isPlaying, audio, dispatch]);

  // SEEK TO TIME
  useEffect(() => { 
    audio.current.currentTime = seekToTime;
  }, [seekToTime]);

  // VOLUME
  useEffect(() => {
    audio.current.volume = level / 100;
  }, [audio, level]);

  // MUTE
  useEffect(() => {
    audio.current.muted = isMuted;
  }, [audio, isMuted]);

  return null;
}

export default AudioPlayerService;
