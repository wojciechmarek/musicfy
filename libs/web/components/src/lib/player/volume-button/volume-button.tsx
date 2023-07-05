import styled from '@emotion/styled';
import { Volume1, Volume2 } from 'lucide-react';

/* eslint-disable-next-line */
export interface VolumeButtonProps {}

const PlayerVolumeButton = styled.button`
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

export function VolumeButton(props: VolumeButtonProps) {
  return (
    <PlayerVolumeButton>
      <Volume2 />
    </PlayerVolumeButton>
  );
}

export default VolumeButton;
