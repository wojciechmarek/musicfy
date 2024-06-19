import { RootState } from '@musicfy/web/utils/store';
import { sideMenuLinks } from '@musicfy/web/utils/constants';
import { useSelector } from 'react-redux';

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
              <LinkContent
                isPlaying={isPlaying && source && link.id === source}
              >
                <span className="icon">{link.icon}</span>
                <p>{link.text}</p>
              </LinkContent>
            </NavLinkStyle>
          </NavigationLink>
        ),
      )}
    </SidebarNavigationLinks>
  );
}

export default Links;
