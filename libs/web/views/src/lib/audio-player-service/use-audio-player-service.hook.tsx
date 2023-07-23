import { useDispatch } from 'react-redux';
import { setCurrentTime, setFrequencyBinCount, setFrequencyData } from '@musicfy/web/store';
import { useCallback, useRef } from 'react';
import song from './song.mp3';

export const useAudioPlayerService = () => {
  const songTimeInSeconds = useRef(0);

  // ---------------------- STORE ----------------------------
  const dispatch = useDispatch();

  // ---------- SOUND OBJECT AND CONTEXT -----------------
  const audio = useRef<HTMLAudioElement>(new Audio());
  const context = useRef(new window.AudioContext());
  const analyser = useRef(context.current.createAnalyser());

  // --------------- PRIVATE METHODS -----------------
  const disconnectTimeUpdateAudioEventListener = useCallback(() => {
    audio.current.removeEventListener('timeupdate', () => {
      console.log('event listener disconnected');
    });
  }, []);

  const connectTimeUpdateAudioEventListener = useCallback(() => {
    dispatch(setFrequencyBinCount(analyser.current.frequencyBinCount));

    audio.current.addEventListener('timeupdate', () => {
      const songTime = audio.current.currentTime;
      const currentSongTimeInSeconds = Math.floor(songTime);

      if (currentSongTimeInSeconds > songTimeInSeconds.current) {
        songTimeInSeconds.current = currentSongTimeInSeconds;
        dispatch(setCurrentTime(currentSongTimeInSeconds));
      }

      const bufferLength = analyser.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.current.getByteFrequencyData(dataArray);
      dispatch(setFrequencyData(Array.from(dataArray)));
    });
  }, [dispatch]);

  const resetTimeCounter = useCallback(() => {
    songTimeInSeconds.current = 0;
  }, []);

  const setPlaybackStateToPlay = useCallback(
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

      setPlaybackStateToPlay(false);
      disconnectTimeUpdateAudioEventListener();
      resetTimeCounter();

      audio.current = new Audio(url);
      audio.current.crossOrigin="anonymous"
      
      // audio.current = new Audio(song);
      context.current = new AudioContext();

      // audio.current.crossOrigin = 'anonymous';

      if (url) {
        setPlaybackStateToPlay(true);
        setupAudioAnalyser();
        connectTimeUpdateAudioEventListener();
      }
    },
    [
      audio,
      setPlaybackStateToPlay,
      disconnectTimeUpdateAudioEventListener,
      resetTimeCounter,
      connectTimeUpdateAudioEventListener,
    ]
  );

  const setupAudioAnalyser = () => {
    const source = context.current.createMediaElementSource(audio.current);
    analyser.current = context.current.createAnalyser();

    source.connect(analyser.current);
    analyser.current.connect(context.current.destination);

    analyser.current.fftSize = 32;
  };

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
    setPlaybackStateToPlay,
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
