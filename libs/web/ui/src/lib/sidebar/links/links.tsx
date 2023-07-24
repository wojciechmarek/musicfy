import styled from '@emotion/styled';
import { AudioSource, RootState } from '@musicfy/web/utility/store';
import {
  Disc3,
  Music4,
  PlaySquare,
  Radio,
  Settings,
  Sliders,
  Tv2,
} from 'lucide-react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const links = [
  {
    icon: <Music4 />,
    text: 'Demo',
    path: '/',
    id: AudioSource.DEMO,
  },
  {
    icon: <Radio />,
    text: 'Internet radio',
    path: '/internet-radio',
    id: AudioSource.INTERNET_RADIO,
  },
  {
    icon: <PlaySquare />,
    text: 'Spotify',
    path: '/spotify',
    id: AudioSource.SPOTIFY,
  },
  {
    text: 'br',
  },
  {
    icon: <Tv2 />,
    text: 'Visualizer',
    path: '/visualizer',
  },
  {
    icon: <Sliders />,
    text: 'Equalizer',
    path: '/equalizer',
  },
  {
    text: 'br',
  },
  {
    icon: <Settings />,
    text: 'Settings',
    path: '/settings',
  },
];

/* eslint-disable-next-line */
export interface LinksProps {}

const SidebarNavigationLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 0.5em;
`;

const NavigationLink = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;

  svg {
    min-width: 0;
  }

  p {
    font-weight: bold;
    margin-left: 1em;
  }

  a {
    display: flex;
    color: white;
    text-decoration: none;
    height: 100%;
  }
`;

const NavigationSeparator = styled.hr`
  border: 1px solid #2a2b32;
  width: 100%;
`;

const NavLinkStyle = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  color: white;
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 1em 1.5em;
  cursor: pointer;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;

  p {
    cursor: pointer;
  }

  &:hover {
    background-color: #2a2b32;
  }

  &.active {
    background-color: #2b31df;
    box-shadow: 0 0 10px #2b31df;

    &:hover {
      background-color: #4a4feb;
    }
  }
`;

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  svg {
    min-width: 0;
  }

  p {
    font-weight: bold;
    margin-left: 1em;
  }
`;

export function Links(props: LinksProps) {
  const { source, isPlaying } = useSelector((state: RootState) => state.playback.audio);

  return (
    <SidebarNavigationLinks>
      {links.map((link, index) =>
        link.text === 'br' ? (
          <NavigationSeparator key={`${link.text}-${index}`} />
        ) : (
          <NavigationLink key={link.text}>
            <NavLinkStyle
              to={link.path || '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <LinkContent>
                {link.icon}
                <p>{link.text}</p>
              </LinkContent>
              {isPlaying && source && link.id === source && <Disc3 />}
            </NavLinkStyle>
          </NavigationLink>
        )
      )}
    </SidebarNavigationLinks>
  );
}

export default Links;
