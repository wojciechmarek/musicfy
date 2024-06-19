import { Track } from 'libs/web/utils/models/src';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AudioSource } from '@musicfy/web/utils/models';

export interface PlaybackState {
  audio: {
    isPlaying: boolean;
    currentTime: number;
    seekToTime: number;
    url: string;
    source: AudioSource;
  };
  mode: {
    isShuffleEnabled: boolean;
    isRepeatEnabled: boolean;
  };
  volume: {
    level: number;
    isMuted: boolean;
  };
  track: Track;
  analysis: {
    leftChannel: number;
    rightChannel: number;
    frequencies: number[];
    bufferSize: number;
  };
}

const initialState: PlaybackState = {
  audio: {
    isPlaying: false,
    currentTime: 0,
    seekToTime: 0,
    url: '',
    source: AudioSource.NONE,
  },
  mode: {
    isShuffleEnabled: false,
    isRepeatEnabled: false,
  },
  volume: {
    level: 34,
    isMuted: false,
  },
  track: {
    id: 0,
    title: '',
    artist: '',
    duration: 0,
    coverUrl: '',
  },
  analysis: {
    leftChannel: 0,
    rightChannel: 0,
    frequencies: [],
    bufferSize: 0,
  },
};

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.audio.url = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.audio.isPlaying = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.audio.currentTime = action.payload;
    },
    setSeekToTime: (state, action: PayloadAction<number>) => {
      state.audio.seekToTime = action.payload;
    },
    setIsShuffleEnabled: (state, action: PayloadAction<boolean>) => {
      state.mode.isShuffleEnabled = action.payload;
      state.mode.isRepeatEnabled = false;
    },
    setIsRepeatEnabled: (state, action: PayloadAction<boolean>) => {
      state.mode.isRepeatEnabled = action.payload;
      state.mode.isShuffleEnabled = false;
    },
    setIsMuted: (state, action: PayloadAction<boolean>) => {
      state.volume.isMuted = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume.level = action.payload;
    },
    setTrack: (state, action: PayloadAction<Track>) => {
      state.track = action.payload;
    },
    setTrackDuration: (state, action: PayloadAction<number>) => {
      state.track.duration = action.payload;
    },
    setAudioSource: (state, action: PayloadAction<AudioSource>) => {
      state.audio.source = action.payload;
    },
    setLeftChannel: (state, action: PayloadAction<number>) => {
      state.analysis.leftChannel = action.payload;
    },
    setRightChannel: (state, action: PayloadAction<number>) => {
      state.analysis.rightChannel = action.payload;
    },
    setFrequencyData: (state, action: PayloadAction<number[]>) => {
      state.analysis.frequencies = action.payload;
    },
    setBufferSize: (state, action: PayloadAction<number>) => {
      state.analysis.bufferSize = action.payload;
    },
  },
});

export const {
  setIsPlaying,
  setCurrentTime,
  setSeekToTime,
  setIsMuted,
  setVolume,
  setIsShuffleEnabled,
  setIsRepeatEnabled,
  setTrack,
  setTrackDuration,
  setAudioSource,
  setUrl,
  setLeftChannel,
  setRightChannel,
  setFrequencyData,
  setBufferSize,
} = playbackSlice.actions;

export default playbackSlice.reducer;
