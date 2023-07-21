import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  setCurrentTime,
} from '@musicfy/web/store';
import { useEffect, useRef } from 'react';

export function AudioPlayerService() {
  const dispatch = useDispatch();

  const { seekToTime, isPlaying, url,  } = useSelector((state: RootState) => state.playback.audio);
  const { isRadio } = useSelector((state: RootState) => state.playback.mode);
  const { level, isMuted } = useSelector((state: RootState) => state.playback.volume);

  const songTimeInSeconds = useRef(0);

  // SOUND OBJECT
  const audio = useRef<HTMLAudioElement>(new Audio());

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


  // --------------------------------------------------

  // PLAY/PAUSE
  useEffect(() => {
    if (isPlaying && audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlaying]);

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

  // URL
  useEffect(() => {
    audio.current.pause();
    audio.current = new Audio(url);

    if (url) {
      audio.current.play();
    }
  }, [audio, url]);

  return null;
}

export default AudioPlayerService;
