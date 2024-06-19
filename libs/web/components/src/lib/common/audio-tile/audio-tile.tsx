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
import { DeleteButton, EditButton, HeartLikeButton } from '..';
import styled from '@emotion/styled';

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

const AudioTileIconButtons = styled.div`
  display: flex;
  gap: 0.25em;
  margin-right: 0.75em;
`;

const AudioTilePlayingLabelAndIconButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

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
        <AudioTilePlayingLabelAndIconButtons>
          <AudioTileIconButtons>
            <HeartLikeButton isLiked={isLiked} onClick={onHeartClick} />
            <EditButton isLiked={isLiked} onClick={onHeartClick} />
            <DeleteButton isLiked={isLiked} onClick={onHeartClick} />
          </AudioTileIconButtons>
          {isPlaying && (
            <AudioTileInfoPlaying>
              IS PLAYING NOW <span>▶</span>
            </AudioTileInfoPlaying>
          )}
        </AudioTilePlayingLabelAndIconButtons>
      </AudioTileInfo>
      <AudioTilePlay>
        <PlayIconButton isPlaying={isPlaying} onClick={onPlayClick} />
      </AudioTilePlay>
    </AudioTileContainer>
  );
}
