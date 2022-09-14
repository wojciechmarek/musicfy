import styled from '@emotion/styled';
import { FastForward, Play, Rewind } from 'lucide-react';

/* eslint-disable-next-line */
export interface PlayButtonsProps {}

const PlayerNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
  gap: 0.25em;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5em;
  padding: 0.5em;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  border-radius: 0.5em;

  &:hover {
    background-color: #2a2b32;
  }
`;

export function PlayButtons(props: PlayButtonsProps) {
  return (
    <PlayerNavigationButtons>
      <NavigationButton>
        <Rewind />
      </NavigationButton>
      <NavigationButton>
        <Play />
      </NavigationButton>
      <NavigationButton>
        <FastForward />
      </NavigationButton>
    </PlayerNavigationButtons>
  );
}

export default PlayButtons;
