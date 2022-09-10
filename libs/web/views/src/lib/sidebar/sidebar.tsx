import styled from '@emotion/styled';
import {
  Home,
  ListMusic,
  Settings,
  Sliders,
  TrendingUp,
  Tv2,
} from 'lucide-react';

/* eslint-disable-next-line */
export interface SidebarProps {}

const SidebarLayout = styled.div`
  width: 20em;
  background-color: #18191e;
`;

const SidebarContainer = styled.div`
  margin: 0.5em 2em 0;
  display: flex;
  flex-direction: column;
`;

const SidebarLogo = styled.p`
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  margin: 0.5em 0.75em;
`

const SidebarNavigationLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 0.5em;
`;

const NavigationLink = styled.li`
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  padding: 1em 1.5em;
  cursor: pointer;
  gap: 1em;

  svg {
    min-width: 0;
  }

  p {
    font-weight: bold;
  }

  &:hover {
    background-color: #2a2b32;
  }

  &:nth-of-type(1) {
    background-color: #2b31df;
    box-shadow: 0 0 10px #2b31df;
  }
`;

export function Sidebar(props: SidebarProps) {
  return (
    <SidebarLayout>
      <SidebarContainer>
        <SidebarLogo>Musicfy</SidebarLogo>
        <SidebarNavigationLinks>
          <NavigationLink>
            <Home />
            <p>Home</p>
          </NavigationLink>
          <NavigationLink>
            <TrendingUp />
            <p>Trending</p>
          </NavigationLink>
          <NavigationLink>
            <ListMusic />
            <p>Playlists</p>
          </NavigationLink>
          <NavigationLink>
            <Sliders />
            <p>Equalizer</p>
          </NavigationLink>
          <NavigationLink>
            <Tv2 />
            <p>Visualizer</p>
          </NavigationLink>
          <NavigationLink>
            <Settings />
            <p>Settings</p>
          </NavigationLink>
        </SidebarNavigationLinks>
      </SidebarContainer>
    </SidebarLayout>
  );
}

export default Sidebar;