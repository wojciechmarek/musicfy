import { createSlice } from '@reduxjs/toolkit';

export interface DemoSong {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  url: string;
}

export interface DemoState {
  songs: DemoSong[];
}

const demoState: DemoState = {
  songs: [
    {
      id: '1',
      title: 'Song 1',
      artist: 'Artist 1',
      duration: 100,
      cover: 'https://picsum.photos/300/300/',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: '2',
      title: 'Song 2',
      artist: 'Artist 2',
      duration: 100,
      cover: 'https://picsum.photos/303/340/',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: '3',
      title: 'Song 3',
      artist: 'Artist 3',
      duration: 100,
      cover: 'https://picsum.photos/300/300/',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ]
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState: demoState,
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
    }
  }
});

export const { addSong } = demoSlice.actions;

export default demoSlice.reducer;