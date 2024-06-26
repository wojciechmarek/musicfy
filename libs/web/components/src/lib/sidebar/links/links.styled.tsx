import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarNavigationLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  gap: 0.5em;
`;

export const NavigationLink = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;

  svg {
    min-width: 0;
  }

  p {
    font-weight: bold;
    margin-left: 0.25em;
  }

  a {
    display: flex;
    color: var(--font-color);
    text-decoration: none;
    height: 100%;
  }
`;

export const NavigationSeparator = styled.hr`
  border: 1px solid var(--tile-background-color);
  width: 100%;
`;

export const NavLinkStyle = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  color: var(--font-color);
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 1em 1.5em;
  cursor: pointer;
  border-radius: 0.5em;

  p {
    cursor: pointer;
  }

  &:hover {
    background-color: var(--tile-button-hover-color);
  }

  &.active {
    color: var(--font-accent-color);
    background-color: var(--accent-blue-color);
    box-shadow: 0 0 10px #2b31df;

    &:hover {
      background-color: var(--accent-blue-hover-color);
    }
  }
`;

export const LinkContent = styled.div<{ isPlaying?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1em;

  svg {
    min-width: 0;
    color: ${(props) => (props.isPlaying ? 'red' : 'var(--font-color)')};
  }

  p {
    font-weight: bold;
    margin-left: 0.5em;
  }
`;
