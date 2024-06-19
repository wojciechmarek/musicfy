import { Button } from './add-audio-tile.styled';

/* eslint-disable-next-line */
export interface AddAudioTileProps {
  title?: string;
  onAddClick: () => void;
}

export function AddAudioTile(props: AddAudioTileProps) {
  const { title = 'Add', onAddClick } = props;
  return <Button onClick={onAddClick}>{title}</Button>;
}
