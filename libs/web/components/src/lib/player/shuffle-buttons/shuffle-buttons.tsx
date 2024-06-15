import styled from '@emotion/styled';
import { Repeat, Shuffle } from 'lucide-react';

/* eslint-disable-next-line */

export enum PlayerShuffleButtonAction {
  Repeat,
  Shuffle,
}

export interface ShuffleButtonsProps {
  onClick: (action: PlayerShuffleButtonAction) => void;
  isRepeatActive: boolean;
  isShuffleActive: boolean;
  isDisabled: boolean;
}

const PlayerNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25em;
  margin-left: 1em;
`;

const NavigationButton = styled.button<{
  isEnabled?: boolean;
  isDisabled?: boolean;
}>`
  background-color: ${(props) => (props.isEnabled ? '#2b31df' : 'transparent')};
  border: none;
  color: var(--font-accent-color);
  font-size: 1.5em;
  padding: 0.5em;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: 0.5em;
  opacity: ${(props) => (props.isDisabled ? 0.3 : 1)};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'all')};
  box-shadow: ${(props) =>
    props.isEnabled ? '0 0 10px #2b31df' : '0 0 10px transparent'};

  &:hover {
    background-color: ${(props) => (props.isEnabled ? '#4a4feb' : '#2a2b32;')};
  }
`;

export function ShuffleButtons(props: ShuffleButtonsProps) {
  const { isRepeatActive, isShuffleActive, isDisabled, onClick } = props;

  return (
    <PlayerNavigationButtons>
      <NavigationButton
        isDisabled={isDisabled}
        isEnabled={isRepeatActive}
        onClick={() => onClick(PlayerShuffleButtonAction.Repeat)}
      >
        <Repeat />
      </NavigationButton>

      <NavigationButton
        isDisabled={isDisabled}
        isEnabled={isShuffleActive}
        onClick={() => onClick(PlayerShuffleButtonAction.Shuffle)}
      >
        <Shuffle />
      </NavigationButton>
    </PlayerNavigationButtons>
  );
}

export default ShuffleButtons;
