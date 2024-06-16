import { ThemeMode } from '@musicfy/web/utils/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: ThemeMode;
  isAutoThemeEnabled: boolean;
}

const themeState: ThemeState = {
  theme: 'dark',
  isAutoThemeEnabled: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: themeState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
    setAutoTheme: (state, action: PayloadAction<boolean>) => {
      state.isAutoThemeEnabled = action.payload;
    },
  },
});

export const { setThemeMode, setAutoTheme } = themeSlice.actions;

export default themeSlice.reducer;
