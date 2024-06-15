import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SpotifyState {
  accessApiUrl: string;
  accessApiKey: string;
  accessApiHost: string;
  isSpotifyAccessActive: boolean;
  isSearchActive: boolean;
  searchPhrase: string;
}

const spotifyState: SpotifyState = {
  accessApiUrl: import.meta.env.VITE_SPOTIFY_RAPID_API_URL,
  accessApiKey: import.meta.env.VITE_SPOTIFY_X_RAPID_API_KEY,
  accessApiHost: import.meta.env.VITE_SPOTIFY_X_RAPID_API_HOST,
  isSpotifyAccessActive: true,
  isSearchActive: true,
  searchPhrase: '',
};

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: spotifyState,
  reducers: {
    setAccessApiUrl: (state, action: PayloadAction<string>) => {
      state.accessApiUrl = action.payload;
      state.isSpotifyAccessActive = true;
    },
    setAccessApiKey: (state, action: PayloadAction<string>) => {
      state.accessApiKey = action.payload;
      state.isSpotifyAccessActive = true;
    },
    setAccessApiHost: (state, action: PayloadAction<string>) => {
      state.accessApiHost = action.payload;
      state.isSpotifyAccessActive = true;
    },
    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload;

      if (state.searchPhrase.length === 0) {
        state.isSearchActive = false;
      } else {
        state.isSearchActive = true;
      }
    },
  },
});

export const {
  setAccessApiUrl,
  setAccessApiKey,
  setAccessApiHost,
  setSearchPhrase,
} = spotifySlice.actions;

export default spotifySlice.reducer;
