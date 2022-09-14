import Home from '../home/home';
import Player from '../player/player';
import Sidebar from '../sidebar/sidebar';
import { ContentContainer, LayoutContainer, LayoutContent } from './layout.styled';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Sidebar />
        <ContentContainer>
          <Home />
        </ContentContainer>
      </LayoutContent>
      <Player />
    </LayoutContainer>
  );
}

export default Layout;
