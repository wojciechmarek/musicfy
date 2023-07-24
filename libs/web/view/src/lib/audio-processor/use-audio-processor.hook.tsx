import { useDispatch } from 'react-redux';
import { setBufferSize, setCurrentTime, setFrequencyData, setLeftChannel, setRightChannel } from '@musicfy/web/utility/store';
import { useCallback, useRef } from 'react';

export const useAudioProcessor = () => {
  // ----------- PROCESSOR INTERNAL VARIABLES ----------------
  const songTimeInSeconds = useRef(0);
  const interval = useRef<NodeJS.Timeout>();

  // ------------- DISPATCH OBJECT ----------------------------
  const dispatch = useDispatch();

  // ---------- SOUND OBJECT AND CONTEXT -----------------
  const audio = useRef<HTMLAudioElement>(new Audio());
  const context = useRef(new window.AudioContext());
  const analyser = useRef(context.current.createAnalyser());
  const leftChannelAnalyser = useRef(context.current.createAnalyser());
  const rightChannelAnalyser = useRef(context.current.createAnalyser());
  const channelSplitter = useRef(context.current.createChannelSplitter(2));

  // --------------- PRIVATE METHODS -----------------
  const startAnalyserInterval = useCallback(() => {
    // -- CREATE DATA BUFFER AND DISPATCH DATA BUFFER LENGTH (for FREQUENCY) --
    const bufferLength = analyser.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    dispatch(setBufferSize(bufferLength));

    // -- START DATA BUFFER AND DISPATCH DATA BUFFER (for CHANNELS) --
    const leftChannel = new Uint8Array(bufferLength);
    const rightChannel = new Uint8Array(bufferLength);

    // -- START INTERVAL: 1sek/20ms = 50HZ REFRESH RATE --
    interval.current = setInterval(() => {

      // -- CALCULATE AND DISPATCH CURRENT PLAYBACK TIME --
      const songTime = audio.current.currentTime;
      const currentSongTimeInSeconds = Math.floor(songTime);

      if (currentSongTimeInSeconds > songTimeInSeconds.current) {
        songTimeInSeconds.current = currentSongTimeInSeconds;
        dispatch(setCurrentTime(currentSongTimeInSeconds));
      }

      // -- CALCULATE AND DISPATCH FREQUENCY DATA --
      analyser.current.getByteFrequencyData(dataArray);
      dispatch(setFrequencyData(Array.from(dataArray)));

      // -- CALCULATE AND DISPATCH SPLITTER CHANNELS DATA --
      leftChannelAnalyser.current.getByteFrequencyData(leftChannel);
      rightChannelAnalyser.current.getByteFrequencyData(rightChannel);

      const leftChannelReducedValue = leftChannel.reduce((acc, curr) => acc + curr, 0);
      const rightChannelReducedValue = rightChannel.reduce((acc, curr) => acc + curr, 0);

      const leftChannelAverageValue = leftChannelReducedValue / leftChannel.length;
      const rightChannelAverageValue = rightChannelReducedValue / rightChannel.length;

      const leftChannelValue = Math.floor(leftChannelAverageValue);
      const rightChannelValue = Math.floor(rightChannelAverageValue);
      
      dispatch(setLeftChannel(leftChannelValue));
      dispatch(setRightChannel(rightChannelValue));   
    }, 20);
  }, [dispatch]);

  const stopAnalyserInterval = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);

  const resetTimeCounter = useCallback(() => {
    songTimeInSeconds.current = 0;
  }, []);

  const setPlaybackStateToPlay = useCallback(
    (isPlaying: boolean) => {
      if (isPlaying && audio.current.paused) {
        audio.current.play();
      }

      if (!isPlaying && !audio.current.paused) {
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
      resetTimeCounter();
      stopAnalyserInterval();

      audio.current = new Audio(url);
      audio.current.crossOrigin="anonymous"

      if (url) {
        setPlaybackStateToPlay(true);
        setupAudioAnalyser();
        startAnalyserInterval();
      }
    },
    [
      audio,
      setPlaybackStateToPlay,
      resetTimeCounter,
      startAnalyserInterval,
      stopAnalyserInterval
    ]
  );

  const setupAudioAnalyser = () => {
    // -- SETUP AUDIO SOURCE --
    const source = context.current.createMediaElementSource(audio.current);

    // -- SETUP FREQUENCY ANALYSER --
    analyser.current = context.current.createAnalyser();
    source.connect(analyser.current);
    analyser.current.connect(context.current.destination);
    analyser.current.fftSize = 32;

    // -- SETUP CHANNELS SPLITS --
    channelSplitter.current = context.current.createChannelSplitter(2);
    source.connect(channelSplitter.current);

    // -- SETUP LEFT CHANNEL ANALYSER --
    channelSplitter.current.connect(leftChannelAnalyser.current, 0, 0);
    leftChannelAnalyser.current.connect(context.current.destination);
    leftChannelAnalyser.current.fftSize = 32;

    // -- SETUP RIGHT CHANNEL ANALYSER --
    channelSplitter.current.connect(rightChannelAnalyser.current, 1, 0);
    rightChannelAnalyser.current.connect(context.current.destination);
    rightChannelAnalyser.current.fftSize = 32;
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
    resetTimeCounter,
  };
};
