import styled from '@emotion/styled';
import { FastForward, Pause, Play, Rewind } from 'lucide-react';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */

export enum PlayerNavigationButtonAction {
  Rewind,
  Play,
  Pause,
  FastForward,
}
export interface PlayButtonsProps {
  isPlaying: boolean;
  onClick: (actp: PlayerNavigationButtonAction) => void;
}

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
  const { isPlaying, onClick } = props;

  const [isAudioPlaying, setIsAudioPlaying] = useState(isPlaying);

  const onPlayPauseClick = () => {
    if (!isAudioPlaying) {
      setIsAudioPlaying(true);
      onClick(PlayerNavigationButtonAction.Play);
    } else {
       setIsAudioPlaying(false);
        onClick(PlayerNavigationButtonAction.Pause);
    }
  };

  useEffect(() => {
    setIsAudioPlaying(isPlaying);
  }, [isPlaying]);

  return (
    <PlayerNavigationButtons>
      <NavigationButton
        onClick={() => onClick(PlayerNavigationButtonAction.Rewind)}
      >
        <Rewind />
      </NavigationButton>
      <NavigationButton
        onClick={onPlayPauseClick}
      >
        {isAudioPlaying ? <Pause /> : <Play />}
      </NavigationButton>
      <NavigationButton
        onClick={() => onClick(PlayerNavigationButtonAction.FastForward)}
      >
        <FastForward />
      </NavigationButton>
    </PlayerNavigationButtons>
  );
}

export default PlayButtons;
