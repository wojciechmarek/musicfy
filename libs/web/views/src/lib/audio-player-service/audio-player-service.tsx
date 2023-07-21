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
  const context = new window.AudioContext();

  // ANALYSER
  const analyser = context.createAnalyser();
  // analyser.minDecibels = -90;
  // analyser.maxDecibels = -10;
  // analyser.smoothingTimeConstant = 0.85;

  const distortion = context.createWaveShaper();
  const gainNode = context.createGain();
  const biquadFilter = context.createBiquadFilter();
  const convolver = context.createConvolver();

  // BARS
  analyser.fftSize = 32;
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.smoothingTimeConstant = 0.85;
  analyser.connect(context.destination);
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // EVENT LISTENERS
  audio.current.addEventListener('timeupdate', () => {
    const songTime = audio.current.currentTime;
    const currentSongTimeInSeconds = Math.floor(songTime);

    if (currentSongTimeInSeconds > songTimeInSeconds.current) {
      songTimeInSeconds.current = currentSongTimeInSeconds;
      dispatch(setCurrentTime(currentSongTimeInSeconds));

      analyser.getByteFrequencyData(dataArray);
      console.log(dataArray);
    }
  });

  // AUDIO PROCESSING
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
