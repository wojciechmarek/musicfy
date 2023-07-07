import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const songs: Song[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i}`,
  title: `Song ${i}`,
  artist: `Artist ${i}`,
  album: `Album ${i}`,
  duration: 180,
  image: `https://picsum.photos/30${i}/300/`,
}));

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  image: string;
}

export interface SuggestionsState {
  recommendations: Song[];
  recentlyPlayed: Song[];
  trending: Song[];
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
    setRecommendations: (state, action: PayloadAction<Song[]>) => {
      state.recommendations = action.payload;
    },
    setRecentlyPlayed: (state, action: PayloadAction<Song[]>) => {
      state.recentlyPlayed = action.payload;
    },
    setTrending: (state, action: PayloadAction<Song[]>) => {
      state.trending = action.payload;
    }
  }
});

export const { setRecommendations, setRecentlyPlayed, setTrending } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
