import { createSlice } from '@reduxjs/toolkit';

export interface DemoSong {
  id: number;
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
      id: 1,
      title: 'Waterfall',
      artist: 'RomanSenykMusic',
      duration: 144,
      cover: 'https://cdn.pixabay.com/audio/2023/02/28/09-32-41-52_200x200.png',
      url: 'https://github.com/wojciechmarek/musicfy/raw/main/demo-songs/waterfall.mp3',
    },
    {
      id: 2,
      title: 'Eco Technology',
      artist: 'Lexin_Music',
      duration: 122,
      cover:
        'https://cdn.pixabay.com/audio/2023/04/08/15-11-40-213_200x200.jpg',
      url: 'https://github.com/wojciechmarek/musicfy/raw/main/demo-songs/eco_technology.mp3',
    },
    {
      id: 3,
      title: 'A Small Miracle',
      artist: 'Romarecord1973',
      duration: 76,
      cover:
        'https://cdn.pixabay.com/audio/2023/01/06/10-39-24-970_200x200.jpg',
      url: 'https://github.com/wojciechmarek/musicfy/raw/main/demo-songs/a_small_miracle.mp3',
    },
  ],
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState: demoState,
  reducers: {},
});

export default demoSlice.reducer;
