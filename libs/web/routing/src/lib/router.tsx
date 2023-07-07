import { Equalizer, Home, Layout, NotFound, Visualizer } from '@musicfy/web/views';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
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