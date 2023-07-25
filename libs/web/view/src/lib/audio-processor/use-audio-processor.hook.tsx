import { useDispatch } from 'react-redux';
import {
  setBufferSize,
  setCurrentTime,
  setFrequencyData,
  setLeftChannel,
  setRightChannel,
} from '@musicfy/web/utility/store';
import { useCallback, useRef } from 'react';

export const useAudioProcessor = () => {
  // ----------- PROCESSOR INTERNAL VARIABLES ----------------
  const songTimeInSeconds = useRef(0);
  const interval = useRef<NodeJS.Timeout>();

  // ------------- DISPATCH OBJECT ----------------------------
  const dispatch = useDispatch();

  // ------ SOUND OBJECT, CONTEXT, GAINS, ANALYZERS -----------
  const audio = useRef<HTMLAudioElement>(new Audio());
  const context = useRef(new window.AudioContext());

  const merger = useRef(context.current.createChannelMerger(2));

  const microphoneGainNode = useRef(context.current.createGain());

  const bassBiquadFilter = useRef(context.current.createBiquadFilter());
  const middleBiquadFilter = useRef(context.current.createBiquadFilter());
  const trebleBiquadFilter = useRef(context.current.createBiquadFilter());

  // const stereoGainNode = useRef(context.current.createGain());

  const leftChannelGainNode = useRef(context.current.createGain());
  const rightChannelGainNode = useRef(context.current.createGain());

  // const karaokeGainNode = useRef(context.current.createGain());

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

      const leftChannelReducedValue = leftChannel.reduce(
        (acc, curr) => acc + curr,
        0
      );
      const rightChannelReducedValue = rightChannel.reduce(
        (acc, curr) => acc + curr,
        0
      );

      const leftChannelAverageValue =
        leftChannelReducedValue / leftChannel.length;
      const rightChannelAverageValue =
        rightChannelReducedValue / rightChannel.length;

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
      audio.current.crossOrigin = 'anonymous';

      if (url) {
        setPlaybackStateToPlay(true);
        setupAudioGainNodesAndAnalyzers();
        startAnalyserInterval();
      }
    },
    [
      audio,
      setPlaybackStateToPlay,
      resetTimeCounter,
      startAnalyserInterval,
      stopAnalyserInterval,
    ]
  );

  const setupAudioGainNodesAndAnalyzers = () => {
    //  SETUP AUDIO SOURCE
    const source = context.current.createMediaElementSource(audio.current);

    // BASS GAIN NODE
    bassBiquadFilter.current = context.current.createBiquadFilter();
    bassBiquadFilter.current.type = "lowshelf"; 
    source.connect(bassBiquadFilter.current);
    
    // MIDDLE GAIN NODE
    middleBiquadFilter.current = context.current.createBiquadFilter();
    middleBiquadFilter.current.type = "allpass";
    bassBiquadFilter.current.connect(middleBiquadFilter.current);
    
    // TREBLE GAIN NODE
    trebleBiquadFilter.current = context.current.createBiquadFilter();
    trebleBiquadFilter.current.type = "highpass";
    middleBiquadFilter.current.connect(trebleBiquadFilter.current);

    // FREQUENCY ANALYSER
    analyser.current = context.current.createAnalyser();
    trebleBiquadFilter.current.connect(analyser.current);
    analyser.current.fftSize = 1024;

    // CHANNELS SPLITTER
    channelSplitter.current = context.current.createChannelSplitter(2);
    trebleBiquadFilter.current.connect(channelSplitter.current);

    // BALANCE GAIN NODES
    leftChannelGainNode.current = context.current.createGain();
    rightChannelGainNode.current = context.current.createGain();
    
    // LEFT CHANNEL GAIN NODE CONNECT TO LEFT CHANNEL
    channelSplitter.current.connect(leftChannelGainNode.current, 0);

    // RIGHT CHANNEL GAIN NODE CONNECT TO RIGHT CHANNEL
    channelSplitter.current.connect(rightChannelGainNode.current, 1);

    // LEFT CHANNEL ANALYSER CONNECT TO LEFT CHANNEL GAIN NODE
    leftChannelGainNode.current.connect(leftChannelAnalyser.current);
    leftChannelAnalyser.current.fftSize = 1024;

    // RIGHT CHANNEL ANALYSER CONNECT TO RIGHT CHANNEL GAIN NODE
    rightChannelGainNode.current.connect(rightChannelAnalyser.current);
    rightChannelAnalyser.current.fftSize = 1024;

    // ----- MERGE TOGETHER AUDIO SPLIT SOURCES ------------
    merger.current = context.current.createChannelMerger(2);
    leftChannelGainNode.current.connect(merger.current, 0, 0);
    rightChannelGainNode.current.connect(merger.current, 0, 1);
    merger.current.connect(context.current.destination);
  };

  const setMicrophoneSource = useCallback((isMicrophoneSource: boolean) => {
    if (isMicrophoneSource) {
      window.navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const source = context.current.createMediaStreamSource(stream);
          source.connect(microphoneGainNode.current);
          microphoneGainNode.current.connect(merger.current, 0, 0);
          microphoneGainNode.current.connect(merger.current, 0, 1);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      microphoneGainNode.current.gain.value = 0;
      leftChannelGainNode.current.gain.value = 1;
      rightChannelGainNode.current.gain.value = 1;
    }
  }, []);

  const setBalance = useCallback((balance: number) => {
    leftChannelGainNode.current.gain.value = 1 - balance / 100;
    rightChannelGainNode.current.gain.value = balance / 100;
  }, []);

  const setStereo = useCallback((isStereo: boolean) => {
    merger.current.disconnect();

    if (isStereo) {
      leftChannelGainNode.current.connect(merger.current, 0, 0);
      rightChannelGainNode.current.connect(merger.current, 0, 1);
    } else {
      leftChannelGainNode.current.connect(merger.current, 0, 0);
      rightChannelGainNode.current.connect(merger.current, 0, 0);
    }

    merger.current.connect(context.current.destination);
  }, []);

  const setKaraoke = useCallback((isKaraoke: boolean) => {
    leftChannelGainNode.current.gain.value = isKaraoke ? 1 : 0;
    rightChannelGainNode.current.gain.value = isKaraoke ? 1 : 0;
  }, []);

  const killAudio = useCallback(() => {
    audio.current.pause();
    audio.current.src = '';
    audio.current.load();

    context.current.close();

    stopAnalyserInterval();
  }, [audio, stopAnalyserInterval]);

  const setSeekToTime = useCallback(
    (seekToTime: number) => {
      const bufferLength = analyser.current.frequencyBinCount;
      dispatch(setBufferSize(bufferLength));
      audio.current.currentTime = seekToTime;
    },
    [audio, dispatch]
  );

  const setBass = useCallback((bass: number) => {
    bassBiquadFilter.current.gain.value = bass;
  }, []);

  const setMiddle = useCallback((middle: number) => {
    middleBiquadFilter.current.gain.value = middle;
  }, []);

  const setTreble = useCallback((treble: number) => {
    trebleBiquadFilter.current.gain.value = treble;
  }, []);

  const setMicrophoneBoost = useCallback((microphone: number) => {
    microphoneGainNode.current.gain.value = microphone;
  }, []);

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
    setBass,
    setMiddle,
    setTreble,
    setMicrophoneBoost,
    killAudio,
  };
};
