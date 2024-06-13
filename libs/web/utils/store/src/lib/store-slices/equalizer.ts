import { BarsMode, Tones } from 'libs/web/utils/models/src';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EqualizerState {
  isEnabled: boolean;
  isStereoEnabled: boolean;
  isMicrophoneEnabled: boolean;
  isKaraokeEnabled: boolean;
  balance: number;
  boostTones: Tones;
  microphoneBoost: number;
  barsMode: BarsMode;
}

const initialState: EqualizerState = {
  isEnabled: true,
  isStereoEnabled: true,
  isMicrophoneEnabled: false,
  isKaraokeEnabled: false,
  balance: 50,
  microphoneBoost: 0,
  barsMode: 'bars',
  boostTones: {
    bass: 0,
    middle: 0,
    treble: 0,
  },
};

export const equalizerSlice = createSlice({
  name: 'equalizer',
  initialState,
  reducers: {
    setIsEnabled: (state, action: PayloadAction<boolean>) => {
      state.isEnabled = action.payload;
    },
    setisStereoEnabled: (state, action: PayloadAction<boolean>) => {
      state.isStereoEnabled = action.payload;
    },
    setisKaraokeEnabled: (state, action: PayloadAction<boolean>) => {
      state.isKaraokeEnabled = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setisMicrophoneEnabled: (state, action: PayloadAction<boolean>) => {
      state.isMicrophoneEnabled = action.payload;
    },
    setBassBooster: (state, action: PayloadAction<number>) => {
      state.boostTones.bass = action.payload;
    },
    setMiddleBooster: (state, action: PayloadAction<number>) => {
      state.boostTones.middle = action.payload;
    },
    setTrebleBooster: (state, action: PayloadAction<number>) => {
      state.boostTones.treble = action.payload;
    },
    setMicrophoneBooster: (state, action: PayloadAction<number>) => {
      state.microphoneBoost = action.payload;
    },
    setBarsMode: (state, action: PayloadAction<BarsMode>) => {
      state.barsMode = action.payload;
    },
  },
});

export const {
  setIsEnabled,
  setisStereoEnabled,
  setisKaraokeEnabled,
  setisMicrophoneEnabled,
  setBassBooster,
  setMiddleBooster,
  setTrebleBooster,
  setBalance,
  setMicrophoneBooster,
  setBarsMode,
} = equalizerSlice.actions;
export default equalizerSlice.reducer;
