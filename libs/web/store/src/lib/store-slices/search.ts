import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  isSearchActive: boolean;
  searchPhrase: string;
}

const initialState: SearchState = {
  isSearchActive: false,
  searchPhrase: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload;

      if (state.searchPhrase.length === 0) {
        state.isSearchActive = false;
      } else {
        state.isSearchActive = true;
      }
    }
  }
});

export const { setSearchPhrase } = searchSlice.actions;

export default searchSlice.reducer;
