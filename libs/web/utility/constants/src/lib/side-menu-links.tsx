import { AudioSource } from '@musicfy/web/utility/store';
import { Disc3, PlaySquare, Radio, Settings, Sliders, Tv2 } from 'lucide-react';

export const sideMenuLinks = [
  {
    icon: <Disc3 />,
    text: 'Demo',
    path: '/',
    id: AudioSource.DEMO,
  },
  {
    icon: <Radio />,
    text: 'Internet radio',
    path: '/internet-radio',
    id: AudioSource.INTERNET_RADIO,
  },
  {
    icon: <PlaySquare />,
    text: 'Spotify',
    path: '/spotify',
    id: AudioSource.SPOTIFY,
  },
  {
    text: 'br',
  },
  {
    icon: <Tv2 />,
    text: 'Visualizer',
    path: '/visualizer',
  },
  {
    icon: <Sliders />,
    text: 'Equalizer',
    path: '/equalizer',
  },
  {
    text: 'br',
  },
  {
    icon: <Settings />,
    text: 'Settings',
    path: '/settings',
  },
];
