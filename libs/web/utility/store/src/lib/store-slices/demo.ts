import { DemoSong } from 'libs/web/utility/models/src';
import { createSlice } from '@reduxjs/toolkit';
import { demoSongs } from '../data/demo-songs';

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
