import styled from '@emotion/styled';
import { Pause, Play } from 'lucide-react';

type Props = {
  isPlaying: boolean;
  onClick: () => void;
};

const IconButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-blue-color);
  color: var(--font-accent-color);
  border-radius: 50%;
  width: 3em;
  height: 3em;
  position: relative;

  &:hover {
    background-color: var(--accent-blue-hover-color);
  }

  .icon {
    position: relative;
    left: 0.125em;
  }
`;

export const PlayIconButton = (props: Props) => {
  const { isPlaying, onClick } = props;

  return (
    <IconButton onClick={onClick}>
      {isPlaying ? <Pause size={20} /> : <Play size={20} className="icon" />}
    </IconButton>
  );
};
