import { createSlice } from '@reduxjs/toolkit';

export interface RadioStation {
  id: string;
  title: string;
  country: string;
  cover: string;
  url: string;
}

export interface RadioState {
  stations: RadioStation[];
}

const radioState: RadioState = {
  stations: [
    {
      id: '1',
      title: 'RFM FM',
      country: 'Poland',
      cover: 'https://picsum.photos/300/300/',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: '2',
      title: 'Radio ZET',
      country: 'Poland',
      cover: 'https://picsum.photos/303/340/',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: '3',
      title: 'Polish Radio 3',
      country: 'Poland',
      cover: 'https://picsum.photos/300/300/',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ]
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {
    addStation: (state, action) => {
      state.stations.push(action.payload);
    }
  }
});

export const { addStation } = radioSlice.actions;

export default radioSlice.reducer;