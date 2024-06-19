import { configureStore } from '@reduxjs/toolkit';
import playbackReducer from './store-slices/playback';
import suggestionReducer from './store-slices/suggestions';
import equalizerReducer from './store-slices/equalizer';
import demoReducer from './store-slices/demo';
import radioReducer from './store-slices/radio';
import spotifySlice from './store-slices/spotify';
import themeSlice from './store-slices/theme';
import favoritesSlice from './store-slices/favorites';

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
    suggestions: suggestionReducer,
    equalizer: equalizerReducer,
    demo: demoReducer,
    radio: radioReducer,
    spotify: spotifySlice,
    theme: themeSlice,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
