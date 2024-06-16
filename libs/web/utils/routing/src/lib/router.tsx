import {
  DemoSongs,
  Equalizer,
  InternetRadio,
  Layout,
  NotFound,
  Spotify,
  Visualizer,
  Settings,
  Favorite,
} from '@musicfy/web/views';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <DemoSongs />,
      },
      {
        path: '/internet-radio',
        element: <InternetRadio />,
      },
      {
        path: '/spotify',
        element: <Spotify />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
      {
        path: '/equalizer',
        element: <Equalizer />,
      },
      {
        path: '/visualizer',
        element: <Visualizer />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);
