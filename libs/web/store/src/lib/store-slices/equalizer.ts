import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EqualizerState {
  isEnabled: boolean;
  isStereo: boolean;
  isMicrophoneSource: boolean;
  isKaraoke: boolean;
  channel: {
    balance: number;
    leftValue: number;
    rightValue: number;
  };
  frequencies: number[];
}

const initialState: EqualizerState = {
  isEnabled: false,
  isStereo: true,
  isMicrophoneSource: false,
  isKaraoke: false,
  channel: {
    balance: 50,
    leftValue: 100,
    rightValue: 100,
  },
  frequencies: [34, 100, 34, 78, 34, 1, 3, 43, 78, 44],
};

export const equalizerSlice = createSlice({
  name: 'equalizer',
  initialState,
  reducers: {
    setIsEnabled: (state, action: PayloadAction<boolean>) => {
      state.isEnabled = action.payload;
    },
    setFrequencies: (state, action: PayloadAction<number[]>) => {
      state.frequencies = action.payload;
    },
    setIsStereo: (state, action: PayloadAction<boolean>) => {
      state.isStereo = action.payload;
    },
    setIsKaraoke: (state, action: PayloadAction<boolean>) => {
      state.isKaraoke = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.channel.balance = action.payload;
    },
    setIsMicrophoneSource: (state, action: PayloadAction<boolean>) => {
      state.isMicrophoneSource = action.payload;
    }
  },
});

export const { setIsEnabled, setIsStereo, setFrequencies, setIsKaraoke, setIsMicrophoneSource } = equalizerSlice.actions;

export default equalizerSlice.reducer;