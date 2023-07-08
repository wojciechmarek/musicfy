import { configureStore } from '@reduxjs/toolkit';
import playbackReducer from './store-slices/playback';
import suggestionReducer from './store-slices/suggestions';
import searchReducer from './store-slices/search';
import equalizerReducer from './store-slices/equalizer';

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
    suggestions: suggestionReducer,
    search: searchReducer,
    equalizer: equalizerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
