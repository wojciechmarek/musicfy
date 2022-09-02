import Home from '../home/home';
import Player from '../player/player';
import Sidebar from '../sidebar/sidebar';
import { ContentContainer, LayoutContainer, MainContainer } from './layout.styled';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <MainContainer>
        <Sidebar />
        <ContentContainer>
          <Home />
        </ContentContainer>
      </MainContainer>
      <Player />
    </LayoutContainer>
  );
}

export default Layout;
