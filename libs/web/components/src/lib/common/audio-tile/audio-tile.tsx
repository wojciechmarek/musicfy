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
import { HeartLikeButton } from '..';

/* eslint-disable-next-line */
export interface AudioTileProps {
  coverUrl: string;
  title: string;
  description: string;
  isLiked: boolean;
  isPlaying: boolean;
  onHeartClick: () => void;
  onPlayClick: () => void;
}

export function AudioTile(props: AudioTileProps) {
  const {
    coverUrl,
    title,
    description,
    isPlaying,
    isLiked,
    onPlayClick,
    onHeartClick,
  } = props;

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
        <HeartLikeButton isLiked={isLiked} onClick={onHeartClick} />
        <PlayIconButton isPlaying={isPlaying} onClick={onPlayClick} />
      </AudioTilePlay>
    </AudioTileContainer>
  );
}
