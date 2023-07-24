import { SpotifySong } from 'libs/web/utility/models/src';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const songs: SpotifySong[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i}`,
  title: `Song ${i}`,
  artist: `Artist ${i}`,
  album: `Album ${i}`,
  duration: 180,
  image: `https://picsum.photos/30${i}/300/`,
}));

export interface SuggestionsState {
  recommendations: SpotifySong[],
  recentlyPlayed: SpotifySong[];
  trending: SpotifySong[];
}

const initialState: SuggestionsState = {
  recommendations: songs,
  recentlyPlayed: songs,
  trending: songs.slice(0, 5),
};

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    setRecommendations: (state, action: PayloadAction<SpotifySong[]>) => {
      state.recommendations = action.payload;
    },
    setRecentlyPlayed: (state, action: PayloadAction<SpotifySong[]>) => {
      state.recentlyPlayed = action.payload;
    },
    setTrending: (state, action: PayloadAction<SpotifySong[]>) => {
      state.trending = action.payload;
    }
  }
});

export const { setRecommendations, setRecentlyPlayed, setTrending } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
