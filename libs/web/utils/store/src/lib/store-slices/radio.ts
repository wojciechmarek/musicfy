import { RadioStation } from '@musicfy/web/utils/models';
import { radioStations } from '@musicfy/web/utils/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RadioState {
  searchEngineUrl: string;
  stations: RadioStation[];
}

const radioState: RadioState = {
  searchEngineUrl: import.meta.env.VITE_RADIO_SEARCH_ENGINE_URL,
  stations: radioStations,
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {
    setSearchEngineUrl: (state, action: PayloadAction<string>) => {
      state.searchEngineUrl = action.payload;
    },
    setNewRadioStation: (state, action: PayloadAction<RadioStation>) => {
      state.stations = [...state.stations, action.payload];
    },
  },
});

export const { setSearchEngineUrl, setNewRadioStation } = radioSlice.actions;

export default radioSlice.reducer;
