import { configureStore } from '@reduxjs/toolkit';
import playbackReducer from './store-slices/playback';
import suggestionReducer from './store-slices/suggestions';

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
    suggestions: suggestionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;