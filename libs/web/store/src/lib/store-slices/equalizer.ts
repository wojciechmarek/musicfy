import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EqualizerState {
  isEnabled: boolean;
  isStereo: boolean;
  isMicrophoneSource: boolean;
  isKaraoke: boolean;
  balance: number;
  bass: number;
  middle: number;
  treble: number;
}

const initialState: EqualizerState = {
  isEnabled: true,
  isStereo: true,
  isMicrophoneSource: false,
  isKaraoke: false,
  balance: 50,
  bass: 45,
  middle: 0,
  treble: 0,
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
      state.bass = action.payload;
    },
    setMiddleBooster: (state, action: PayloadAction<number>) => {
      state.middle = action.payload;
    },
    setTrebleBooster: (state, action: PayloadAction<number>) => {
      state.treble = action.payload;
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
} = equalizerSlice.actions;
export default equalizerSlice.reducer;
