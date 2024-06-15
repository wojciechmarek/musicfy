import { ThemeMode } from '@musicfy/web/utils/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: ThemeMode;
}

const themeState: ThemeState = {
  theme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: themeState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      if (action.payload === 'system') {
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          state.theme = 'dark';
          return;
        }

        state.theme = 'light';
        return;
      }

      state.theme = action.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
