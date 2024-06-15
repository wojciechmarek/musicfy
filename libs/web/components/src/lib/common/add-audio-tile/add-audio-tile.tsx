import { AddAudioTileContainer } from './add-audio-tile.styled';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AddAudioTileProps {
  title?: string;
  onAddClick: () => void;
}

const Button = styled.button`
  background-color: transparent;
  color: var(--font-color);
  border: none;
  height: 2em;
  cursor: pointer;
  width: 100%;
`;

export function AddAudioTile(props: AddAudioTileProps) {
  const { title = 'Add', onAddClick } = props;
  return (
    <AddAudioTileContainer>
      <Button onClick={onAddClick}>{title}</Button>
    </AddAudioTileContainer>
  );
}
