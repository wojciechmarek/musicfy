import { createSlice } from '@reduxjs/toolkit';

export interface RadioStation {
  id: number;
  title: string;
  description: string;
  cover: string;
  url: string;
}

export interface RadioState {
  stations: RadioStation[];
}

const radioState: RadioState = {
  stations: [
    {
      id: 1,
      title: 'RFM FM',
      description: 'Polish General Radio',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/RMF_FM_logotyp_2022.png',
      url: 'https://rs6-krk2.rmfstream.pl/rmf_fm',
    },
    {
      id: 2,
      title: 'Radio ZET',
      description: 'Polish General Radio',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Radio_ZET_logo.png',
      url: 'https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/audio.livx',
    },
    {
      id: 3,
      title: 'Radio Maryja',
      description: 'Polish Religious Radio',
      cover: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Radio-Maryja1.jpg',
      url: 'https://radiomaryja.fastcast4u.com/proxy/radiomaryja?mp=/1',
    },
  ]
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {}
});

export default radioSlice.reducer;