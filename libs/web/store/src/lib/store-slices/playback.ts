import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Track {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  duration?: number;
}

export const enum AudioSource {
  DEMO = 'demo',
  INTERNET_RADIO = 'internet-radio',
  SPOTIFY = 'spotify',
}

export interface PlaybackState {
  audio: {
    isPlaying: boolean;
    currentTime: number;
    seekToTime: number;
    url: string;
    source: AudioSource;
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
  track: Track,
  analysis: {
    leftChannel: number;
    rightChannel: number;
    frequencies: number[];
  }
}

const initialState: PlaybackState = {
  audio: {
    isPlaying: false,
    currentTime: 0,
    seekToTime: 0,
    url: '',
    source: AudioSource.DEMO,
  },
  mode: {
    isShuffling: false,
    isRepeating: false,
    isRadio: false,
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
  }
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
  setIsRadio,
  setTrack,
  setTrackDuration,
  setAudioSource,
  setUrl,
  setLeftChannel,
  setRightChannel,
} = playbackSlice.actions;

export default playbackSlice.reducer;
