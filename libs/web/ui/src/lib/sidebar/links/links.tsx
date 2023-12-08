import { RootState } from '@musicfy/web/utility/store';
import { Music4, Play } from 'lucide-react';
import { useSelector } from 'react-redux';
import { sideMenuLinks } from '@musicfy/web/utility/constants';

import {
  LinkContent,
  NavLinkStyle,
  NavigationLink,
  NavigationSeparator,
  PlayingRedBox,
  SidebarNavigationLinks,
} from './links.styled';

/* eslint-disable-next-line */
export interface LinksProps {}

export function Links(props: LinksProps) {
  const { source, isPlaying } = useSelector(
    (state: RootState) => state.playback.audio,
  );

  return (
    <SidebarNavigationLinks>
      {sideMenuLinks.map((link, index) =>
        link.text === 'br' ? (
          <NavigationSeparator key={`${link.text}-${index}`} />
        ) : (
          <NavigationLink key={link.text}>
            <NavLinkStyle
              to={link.path ?? '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <LinkContent>
                {link.icon}
                <p>{link.text}</p>
              </LinkContent>
              {isPlaying && source && link.id === source && (
                <PlayingRedBox>▶</PlayingRedBox>
              )}
            </NavLinkStyle>
          </NavigationLink>
        ),
      )}
    </SidebarNavigationLinks>
  );
}

export default Links;
