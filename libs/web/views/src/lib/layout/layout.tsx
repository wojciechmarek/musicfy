import { Fragment } from 'react';
import { AudioProcessor } from '../audio-processor/audio-processor';
import { Player } from '../player/player';
import { Sidebar } from '../sidebar/sidebar';
import {
  ContentContainer,
  LayoutContainer,
  LayoutContent,
  ThemeWrapper,
  WrongResolutionContainer,
  WrongResolutionText,
} from './layout.styled';

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/utils/store';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <ThemeWrapper data-theme={theme}>
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
    </ThemeWrapper>
  );
}

export default Layout;
