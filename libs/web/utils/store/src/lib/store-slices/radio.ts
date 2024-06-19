import { RadioStation } from '@musicfy/web/utils/models';
import { radioStations } from '@musicfy/web/utils/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RadioState {
  searchEngineUrl: string;
  stations: RadioStation[];
}

const savedStations = JSON.parse(
  localStorage.getItem('stations') ?? '[]',
) as RadioStation[];

const radioState: RadioState = {
  searchEngineUrl: import.meta.env.VITE_RADIO_SEARCH_ENGINE_URL,
  stations: [...savedStations, ...radioStations],
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {
    setSearchEngineUrl: (state, action: PayloadAction<string>) => {
      state.searchEngineUrl = action.payload;
    },
    setNewRadioStation: (state, action: PayloadAction<RadioStation>) => {
      state.stations = [action.payload, ...state.stations];

      const savedStations = JSON.parse(
        localStorage.getItem('stations') ?? '[]',
      ) as RadioStation[];

      const updatedRadios = [action.payload, ...savedStations];
      localStorage.setItem('stations', JSON.stringify(updatedRadios));
    },
  },
});

export const { setSearchEngineUrl, setNewRadioStation } = radioSlice.actions;

export default radioSlice.reducer;
