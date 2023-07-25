import { RadioStation } from 'libs/web/utility/models/src';
import { createSlice } from '@reduxjs/toolkit';

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
    {
      id: 4,
      title: 'Radio ESKA',
      description: 'Polish Party Radio',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Radio_Eska.jpg',
      url: 'https://radio.stream.smcdn.pl/icradio-p/2440-2.aac/playlist.m3u8',
    },
    {
      id: 5,
      title: 'Polish Radio 1',
      description: 'Polish National Radio',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Polskie_Radio_logotyp_2017.svg',
      url: 'http://mp3.polskieradio.pl:8950/;',
    },
    {
      id: 6,
      title: 'Radio Free Europe - Radio Liberty',
      description: 'Freedom Radio (Russian)',
      cover: 'https://www.rferl.org/Content/responsive/RFE/en-US/img/logo-print_color.png',
      url: 'https://rfe-channel-04.akacast.akamaistream.net/7/885/229654/v1/ibb.akacast.akamaistream.net/rfe_channel_04.mp3',
    },
    {
      id: 7,
      title: 'RMF Maxxx',
      description: 'Polish Party Radio',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Logo_RMF_MAXX.png',
      url: 'http://195.150.20.7/rmf_maxxx',
    },
    {
      id: 8,
      title: 'Nash FM 106.1',
      description: 'American Country Radio (New Orleans)',
      cover: 'https://upload.wikimedia.org/wikipedia/en/7/7f/WRKN_Nash_Icon_106.1_logo.png',
      url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/WRKNFMAAC.aac',
    },
    {
      id: 9,
      title: 'Alt 104.5',
      description: 'Alternative Rock Radio (Philadelphia)',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/3/35/WRFFNewLogo.png',
      url: 'https://stream.revma.ihrhls.com/zc3401',
    },
  ],
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState: radioState,
  reducers: {}
});

export default radioSlice.reducer;