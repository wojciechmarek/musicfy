import { FavoriteItem } from '@musicfy/web/utils/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoritesState {
  stations: FavoriteItem[];
  spotify: FavoriteItem[];
  tracks: FavoriteItem[];
}

const favoritesState: FavoritesState = {
  stations: [],
  spotify: [],
  tracks: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesState,
  reducers: {
    setFavoriteStations: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.stations = action.payload;
    },
    setFavoriteSpotify: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.spotify = action.payload;
    },
    setFavoriteTracks: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.tracks = action.payload;
    },
  },
});

export const { setFavoriteStations, setFavoriteSpotify, setFavoriteTracks } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
