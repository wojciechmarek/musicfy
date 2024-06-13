import { DemoSong } from '@musicfy/web/utils/models';
import { demoSongs } from '@musicfy/web/utils/constants';
import { createSlice } from '@reduxjs/toolkit';

export interface DemoState {
  songs: DemoSong[];
}

const demoState: DemoState = {
  songs: demoSongs
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState: demoState,
  reducers: {},
});

export default demoSlice.reducer;
