import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface EqualizerState {
  isEnabled: boolean;
}

const initialState: EqualizerState = {
  isEnabled: false,
};

export const equalizerSlice = createSlice({
  name: 'equalizer',
  initialState,
  reducers: {
    setIsEnabled: (state, action: PayloadAction<boolean>) => {
      state.isEnabled = action.payload;
    }
  }
});

export const { setIsEnabled } = equalizerSlice.actions;

export default equalizerSlice.reducer;