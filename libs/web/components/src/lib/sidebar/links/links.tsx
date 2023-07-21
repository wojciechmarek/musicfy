import styled from '@emotion/styled';
import {
  Music4,
  PlaySquare,
  Radio,
  Settings,
  Sliders,
  Tv2,
} from 'lucide-react';

import {  NavLink } from 'react-router-dom';

const links = [
  {
    icon: <Music4 />,
    text: 'Demo',
    path: '/',
  },
  {
    icon: <Radio />,
    text: 'Internet radio',
    path: '/internet-radio',
  },
  {
    icon: <PlaySquare />,
    text: 'Spotify',
    path: '/spotify',
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

export function Links(props: LinksProps) {
  return (
    <SidebarNavigationLinks>
      {links.map((link) =>
        link.text === 'br' ? (
          <NavigationSeparator key={link.text}/>
        ) : (
          <NavigationLink key={link.text}>
            <NavLinkStyle
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.icon}
              <p>{link.text}</p>
            </NavLinkStyle>
          </NavigationLink>
        )
      )}
    </SidebarNavigationLinks>
  );
}

export default Links;
