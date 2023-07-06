import Home from '../home/home';
import Equalizer from '../equalizer/equalizer';
import Player from '../player/player';
import Sidebar from '../sidebar/sidebar';
import {
  ContentContainer,
  LayoutContainer,
  LayoutContent,
} from './layout.styled';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Visualizer from '../visualizer/visualizer';

const router = createBrowserRouter([
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
]);

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Sidebar />
        <ContentContainer>
          <RouterProvider router={router} />
        </ContentContainer>
      </LayoutContent>
      <Player />
    </LayoutContainer>
  );
}

export default Layout;
