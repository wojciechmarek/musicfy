import { RadioStation } from '@musicfy/web/utils/models';
import { radioStations } from '@musicfy/web/utils/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RadioState {
  stations: RadioStation[];
}

const radioState: RadioState = {
  stations: radioStations,
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {
    setLocalStorage: (state, action: PayloadAction<RadioStation[]>) => {
      state.stations = action.payload;
    },
  }
});

export default radioSlice.reducer;