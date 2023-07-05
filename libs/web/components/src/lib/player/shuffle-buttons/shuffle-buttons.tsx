import styled from '@emotion/styled';
import { Repeat, Shuffle } from 'lucide-react';

/* eslint-disable-next-line */

export enum PlayerShuffleButtonAction {
  Repeat,
  Shuffle,
}

export interface ShuffleButtonsProps {
  onClick?: (action: PlayerShuffleButtonAction) => void;
}

const PlayerNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25em;
  margin-left: 1em;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5em;
  padding: 0.5em;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: 0.5em;

  &:hover {
    background-color: #2a2b32;
  }
`;

export function ShuffleButtons(props: ShuffleButtonsProps) {
  const { onClick } = props;

  return (
    <PlayerNavigationButtons>
      <NavigationButton
        onClick={() => onClick(PlayerShuffleButtonAction.Repeat)}
      >
        <Repeat />
      </NavigationButton>
      
      <NavigationButton
        onClick={() => onClick(PlayerShuffleButtonAction.Shuffle)}
      >
        <Shuffle />
      </NavigationButton>
    </PlayerNavigationButtons>
  );
}

export default ShuffleButtons;
