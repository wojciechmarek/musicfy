import Player from '../player/player';
import {Sidebar} from '../sidebar/sidebar';
import {
  ContentContainer,
  LayoutContainer,
  LayoutContent,
} from './layout.styled';

import { Outlet } from 'react-router-dom';
import AudioPlayerService from '../audio-player-service/audio-player-service';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <AudioPlayerService />
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
