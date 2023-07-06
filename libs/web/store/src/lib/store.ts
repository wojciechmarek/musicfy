import { configureStore } from '@reduxjs/toolkit';
import playbackReducer from './store-slices/playback';

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
