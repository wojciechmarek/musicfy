import Home from '../home/home';
import Equalizer from '../equalizer/equalizer';
import Player from '../player/player';
import Sidebar from '../sidebar/sidebar';
import {
  ContentContainer,
  LayoutContainer,
  LayoutContent,
} from './layout.styled';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Visualizer from '../visualizer/visualizer';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {

}

export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Sidebar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </LayoutContent>
      <Player />
    </LayoutContainer>
  );
}

export default Layout;
