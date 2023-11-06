import { AudioProcessor } from '../audio-processor/audio-processor';
import { Player } from '../player/player';
import { Sidebar } from '../sidebar/sidebar';
import {
  ContentContainer,
  LayoutContainer,
  LayoutContent,
  WrongResolutionContainer,
  WrongResolutionText,
} from './layout.styled';

import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LayoutProps { }

export function Layout(props: LayoutProps) {
  return (
    <>
      <WrongResolutionContainer>
        <WrongResolutionText>Resolution is too small</WrongResolutionText>
      </WrongResolutionContainer>
      <LayoutContainer>
        <AudioProcessor />
        <LayoutContent>
          <Sidebar />
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </LayoutContent>
        <Player />
      </LayoutContainer>
    </>
  );
}

export default Layout;
