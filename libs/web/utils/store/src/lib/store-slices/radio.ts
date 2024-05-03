import { RadioStation } from 'libs/web/utils/models/src';
import { createSlice } from '@reduxjs/toolkit';
import { radioStations } from '../data/radio-stations';

export interface RadioState {
  stations: RadioStation[];
}

const radioState: RadioState = {
  stations: radioStations,
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {}
});

export default radioSlice.reducer;