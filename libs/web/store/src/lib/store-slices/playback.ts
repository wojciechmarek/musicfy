import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';
import { useAudioPlayer } from '../services/audio-player'

export interface PlaybackState {
  isPlaying: boolean;
  mode: {
    isShuffling: boolean;
    isRepeating: boolean;
  },
  volume: {
    level: number;
    isMuted: boolean;
  },
  track: {
    id: string;
    name: string;
    artist: string;
    album: string;
    duration: number;
    image: string;
  }
}

const initialState: PlaybackState = {
  isPlaying: false,
  mode: {
    isShuffling: false,
    isRepeating: false,
  },
  volume: {
    level: 34,
    isMuted: false,
  },
  track: {
    id: '',
    name: '',
    artist: '',
    album: '',
    duration: 0,
    image: '',
  }
};

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffling: (state, action: PayloadAction<boolean>) => {
      state.mode.isShuffling = action.payload;
      state.mode.isRepeating = false;
    },
    setIsRepeating: (state, action: PayloadAction<boolean>) => {
      state.mode.isRepeating = action.payload;
      state.mode.isShuffling = false;
    },
    setIsMuted: (state, action: PayloadAction<boolean>) => {
      state.volume.isMuted = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume.level = action.payload;
    },
    setTrack: (state, action: PayloadAction<PlaybackState['track']>) => {
      state.track = action.payload;
    },
  },
});

export const { setIsPlaying, setIsMuted, setVolume, setIsShuffling, setIsRepeating } = playbackSlice.actions;

export default playbackSlice.reducer;
