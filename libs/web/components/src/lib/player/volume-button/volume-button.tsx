import styled from '@emotion/styled';
import { Volume2, VolumeX } from 'lucide-react';

export interface VolumeButtonProps {
  onClick: () => void;
  isMuted: boolean;
}

const PlayerVolumeButton = styled.button<{
  isEnabled?: boolean;
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
  box-shadow: ${(props) =>
    props.isEnabled ? '0 0 10px #2b31df' : '0 0 10px transparent'};

  &:hover {
    background-color: ${(props) => (props.isEnabled ? '#4a4feb' : '#2a2b32;')};
  }
`;

export function VolumeButton(props: VolumeButtonProps) {
  const { onClick, isMuted } = props;

  return (
    <PlayerVolumeButton onClick={onClick} isEnabled={isMuted}>
      {isMuted ? <VolumeX /> : <Volume2 />}
    </PlayerVolumeButton>
  );
}

export default VolumeButton;
