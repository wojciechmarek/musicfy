import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SpotifyState {
  accessApiKey: string;
  isAccessApiKeyChanged: boolean;
  isSearchActive: boolean;
  searchPhrase: string;
}

const spotifyState: SpotifyState = {
  accessApiKey: 'NO_API_KEY',
  isAccessApiKeyChanged: false,
  isSearchActive: false,
  searchPhrase: '',
};

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: spotifyState,
  reducers: {
    setAccessApiKey: (state, action) => {
      state.accessApiKey = action.payload;
      state.isAccessApiKeyChanged = true;
    },
    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload;

      if (state.searchPhrase.length === 0) {
        state.isSearchActive = false;
      } else {
        state.isSearchActive = true;
      }
    }
  }
});

export const { setAccessApiKey, setSearchPhrase } = spotifySlice.actions;

export default spotifySlice.reducer;