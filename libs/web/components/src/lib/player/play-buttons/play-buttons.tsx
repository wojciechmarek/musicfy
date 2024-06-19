import styled from '@emotion/styled';
import { FastForward, Pause, Play, Rewind } from 'lucide-react';

/* eslint-disable-next-line */

export enum PlayerNavigationButtonAction {
  Rewind,
  Play,
  Pause,
  FastForward,
}
export interface PlayButtonsProps {
  isPlaying: boolean;
  isNavigationDisabled: boolean;
  onClick: (action: PlayerNavigationButtonAction) => void;
}

const PlayerNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25em;
`;

const NavigationButton = styled.button<{
  isDisabled?: boolean;
}>`
  background-color: transparent;
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

  &:hover {
    background-color: #2a2b32;
  }

  &.play-pause__button {
    background-color: var(--accent-blue-color);
    box-shadow: 0 0 10px #2b31df;
    border-radius: 50%;

    &:hover {
      background-color: #4a4feb;
    }
  }

  .play__icon {
    position: relative;
    left: 0.125em;
  }
`;

export function PlayButtons(props: PlayButtonsProps) {
  const { isPlaying, isNavigationDisabled, onClick } = props;

  return (
    <PlayerNavigationButtons>
      <NavigationButton
        isDisabled={isNavigationDisabled}
        onClick={() => onClick(PlayerNavigationButtonAction.Rewind)}
      >
        <Rewind />
      </NavigationButton>
      <NavigationButton
        className="play-pause__button"
        onClick={() =>
          onClick(
            isPlaying
              ? PlayerNavigationButtonAction.Pause
              : PlayerNavigationButtonAction.Play,
          )
        }
      >
        {isPlaying ? <Pause /> : <Play className="play__icon" />}
      </NavigationButton>
      <NavigationButton
        isDisabled={isNavigationDisabled}
        onClick={() => onClick(PlayerNavigationButtonAction.FastForward)}
      >
        <FastForward />
      </NavigationButton>
    </PlayerNavigationButtons>
  );
}

export default PlayButtons;
