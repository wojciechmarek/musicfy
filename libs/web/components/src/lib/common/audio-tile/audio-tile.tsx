import { PlayIconButton } from '../play-icon-button/play-icon-button';
import {
  AudioTileContainer,
  AudioTileImage,
  AudioTileInfo,
  AudioTileInfoDuration,
  AudioTileInfoPlaying,
  AudioTileInfoSpacer,
  AudioTileInfoTitle,
  AudioTilePlay,
} from './audio-tile.styled';

/* eslint-disable-next-line */
export interface AudioTileProps {
  id: number;
  coverUrl: string;
  title: string;
  description: string;
  isPlaying: boolean;
  onPlayClick: (id: number) => void;
}

export function AudioTile(props: AudioTileProps) {
  const { coverUrl, title, description, isPlaying, id, onPlayClick } = props;
  return (
    <AudioTileContainer>
      <AudioTileImage>
        <img src={coverUrl} alt="Song Cover" />
      </AudioTileImage>
      <AudioTileInfo>
        <AudioTileInfoTitle>{title}</AudioTileInfoTitle>
        <AudioTileInfoDuration>{description}</AudioTileInfoDuration>
        <AudioTileInfoSpacer />
        {isPlaying && (
          <AudioTileInfoPlaying>
            IS PLAYING NOW <span>▶</span>
          </AudioTileInfoPlaying>
        )}
      </AudioTileInfo>
      <AudioTilePlay>
        <PlayIconButton isPlaying={isPlaying} onClick={() => onPlayClick(id)} />
      </AudioTilePlay>
    </AudioTileContainer>
  );
}
