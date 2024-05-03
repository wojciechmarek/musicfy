import { BarsMode, Tones } from 'libs/web/utils/models/src';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EqualizerState {
  isEnabled: boolean;
  isStereo: boolean;
  isMicrophoneSource: boolean;
  isKaraoke: boolean;
  balance: number;
  boostTones: Tones;
  microphoneBoost: number;
  barsMode: BarsMode;
}

const initialState: EqualizerState = {
  isEnabled: true,
  isStereo: true,
  isMicrophoneSource: false,
  isKaraoke: false,
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
    setIsStereo: (state, action: PayloadAction<boolean>) => {
      state.isStereo = action.payload;
    },
    setIsKaraoke: (state, action: PayloadAction<boolean>) => {
      state.isKaraoke = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setIsMicrophoneSource: (state, action: PayloadAction<boolean>) => {
      state.isMicrophoneSource = action.payload;
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
  setIsStereo,
  setIsKaraoke,
  setIsMicrophoneSource,
  setBassBooster,
  setMiddleBooster,
  setTrebleBooster,
  setBalance,
  setMicrophoneBooster,
  setBarsMode,
} = equalizerSlice.actions;
export default equalizerSlice.reducer;
