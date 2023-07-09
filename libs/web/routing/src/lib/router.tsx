import { DemoSongs, Equalizer, Home, InternetRadio, Layout, NotFound, Spotify, Visualizer } from '@musicfy/web/views';
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
        path: '/equalizer',
        element: <Equalizer />,
      },
      {
        path: '/visualizer',
        element: <Visualizer />,
      },
    ],
  },
]);