import { useDispatch } from 'react-redux';
import { setCurrentTime } from '@musicfy/web/store';
import { useCallback, useRef } from 'react';

export const useAudioPlayerService = () => {
  // ---------------------- STORE ----------------------------
  const dispatch = useDispatch();

  // ---------- AUDIO PROCESSING - SOUND OBJECT -----------------
  const audio = useRef<HTMLAudioElement>(new Audio());
  const context = new window.AudioContext();

  // ------------ AUDIO PROCESSING - ANALYSER --------------------
  const analyser = context.createAnalyser();
  // analyser.minDecibels = -90;
  // analyser.maxDecibels = -10;
  // analyser.smoothingTimeConstant = 0.85;

  // const distortion = context.createWaveShaper();
  // const gainNode = context.createGain();
  // const biquadFilter = context.createBiquadFilter();
  // const convolver = context.createConvolver();

  // BARS
  analyser.fftSize = 32;
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.smoothingTimeConstant = 0.85;
  analyser.connect(context.destination);
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // ------------ SOUND OBJECT - EVENT LISTENERS ----------------------------
  const songTimeInSeconds = useRef(0);
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

  // ---------------- METHODS ----------------------------
  const setPlaybackState = useCallback(
    (isPlaying: boolean) => {
      if (isPlaying && audio.current.paused) {
        audio.current.play();
      } else {
        audio.current.pause();
      }
    },
    [audio]
  );

  const setVolume = useCallback(
    (level: number) => {
      audio.current.volume = level / 100;
    },
    [audio]
  );

  const setMuted = useCallback(
    (isMuted: boolean) => {
      audio.current.muted = isMuted;
    },
    [audio]
  );

  const setNewAudioUrl = useCallback(
    (url: string) => {
      audio.current.pause();
      audio.current = new Audio(url);

      if (url) {
        setPlaybackState(true);
      }
    },
    [audio, setPlaybackState]
  );

  const setMicrophoneSource = useCallback((isMicrophoneSource: boolean) => {
    if (isMicrophoneSource) {
      window.navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          stream.getAudioTracks().forEach((track) => track.stop());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const setBalance = useCallback(
    (balance: number) => {
      // audio.current.balance = balance;
    },
    [audio]
  );

  const setStereo = useCallback(
    (isStereo: boolean) => {
      // audio.current.stereo = isStereo;
    },
    [audio]
  );

  const setKaraoke = useCallback(
    (isKaraoke: boolean) => {
      // audio.current.karaoke = isKaraoke;
    },
    [audio]
  );

  const setSeekToTime = useCallback(
    (seekToTime: number) => {
      audio.current.currentTime = seekToTime;
    },
    [audio]
  );

  return {
    setPlaybackState,
    setVolume,
    setMuted,
    setNewAudioUrl,
    setMicrophoneSource,
    setBalance,
    setStereo,
    setKaraoke,
    setSeekToTime,
  };
};
