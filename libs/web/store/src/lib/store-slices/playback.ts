import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlaybackState {
  audio: {
    isPlaying: boolean;
    currentTime: number;
    seekToTime: number;
    url: string;
  };
  mode: {
    isShuffling: boolean;
    isRepeating: boolean;
    isRadio: boolean;
  };
  volume: {
    level: number;
    isMuted: boolean;
  };
  track: {
    id: string;
    name: string;
    artist: string;
    album: string;
    duration: number;
    image: string;
  };
}

const initialState: PlaybackState = {
  audio: {
    isPlaying: false,
    currentTime: 0,
    seekToTime: 0,
    url: '',
  },
  mode: {
    isShuffling: false,
    isRepeating: false,
    isRadio: true,
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
    duration: 145,
    image: '',
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
    setIsShuffling: (state, action: PayloadAction<boolean>) => {
      state.mode.isShuffling = action.payload;
      state.mode.isRepeating = false;
    },
    setIsRepeating: (state, action: PayloadAction<boolean>) => {
      state.mode.isRepeating = action.payload;
      state.mode.isShuffling = false;
    },
    setIsRadio: (state, action: PayloadAction<boolean>) => {
      state.mode.isRadio = action.payload;
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
    setTrackDuration: (state, action: PayloadAction<number>) => {
      state.track.duration = action.payload;
    }
  },
});

export const {
  setIsPlaying,
  setCurrentTime,
  setSeekToTime,
  setIsMuted,
  setVolume,
  setIsShuffling,
  setIsRepeating,
  setTrackDuration,
  setUrl,
} = playbackSlice.actions;

export default playbackSlice.reducer;
