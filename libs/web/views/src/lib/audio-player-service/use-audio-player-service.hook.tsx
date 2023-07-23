import { useDispatch } from 'react-redux';
import { setCurrentTime } from '@musicfy/web/store';
import { useCallback, useRef } from 'react';

export const useAudioPlayerService = () => {
  const songTimeInSeconds = useRef(0);
  const contextRef = useRef(new window.AudioContext());
  const analyserRef = useRef(contextRef.current.createAnalyser());

  // ---------------------- STORE ----------------------------
  const dispatch = useDispatch();

  // ---------- SOUND OBJECT AND CONTEXT -----------------
  const audio = useRef<HTMLAudioElement>(new Audio());
  const context = useRef(new window.AudioContext());
  const analyserNode = useRef(context.current.createAnalyser());

  // ------------ AUDIO PROCESSING - ANALYSER --------------------
  // analyser.minDecibels = -90;
  // analyser.maxDecibels = -10;
  // analyser.smoothingTimeConstant = 0.85;

  // const distortion = context.createWaveShaper();
  // const gainNode = context.createGain();
  // const biquadFilter = context.createBiquadFilter();
  // const convolver = context.createConvolver();

  // --------------- PRIVATE METHODS -----------------
  const disconnectTimeUpdateAudioEventListener = () => {
    audio.current.removeEventListener('timeupdate', () => {
      console.log('event listener disconnected');
    });
  };

  const connectTimeUpdateAudioEventListener = () => {
    audio.current.addEventListener('timeupdate', () => {
      const songTime = audio.current.currentTime;
      const currentSongTimeInSeconds = Math.floor(songTime);

      if (currentSongTimeInSeconds > songTimeInSeconds.current) {
        songTimeInSeconds.current = currentSongTimeInSeconds;
        dispatch(setCurrentTime(currentSongTimeInSeconds));

        analyserNode.current.fftSize = 32;
        const dataArray = new Float32Array(16);

        analyserRef.current.getFloatFrequencyData(dataArray);
        console.log(dataArray);
      }
    });
  };

  const resetTimeCounter = () => {
    songTimeInSeconds.current = 0;
  };

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

  const setNewAudioUrlAndStartPlay = useCallback(
    (url: string) => {
      if (audio.current.src === url) {
        return;
      }

      audio.current.pause();
      audio.current = new Audio(url);
      context.current = new AudioContext();
      analyserNode.current = context.current.createAnalyser();
      
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

  const setBalance = useCallback((balance: number) => {
    console.log('change balance', balance);
  }, []);

  const setStereo = useCallback((isStereo: boolean) => {
    console.log('change stereo', isStereo);
  }, []);

  const setKaraoke = useCallback((isKaraoke: boolean) => {
    console.log('change karaoke', isKaraoke);
  }, []);

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
    setNewAudioUrlAndStartPlay,
    setMicrophoneSource,
    setBalance,
    setStereo,
    setKaraoke,
    setSeekToTime,
    disconnectTimeUpdateAudioEventListener,
    connectTimeUpdateAudioEventListener,
    resetTimeCounter,
  };
};
