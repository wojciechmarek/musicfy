import styled from '@emotion/styled';
import { HeartLikeButton } from '../heart-like-button/heart-like-button';
import { PlayIconButton } from '../play-icon-button/play-icon-button';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  isLiked: boolean;
  isPlaying: boolean;
  onPlaybackClick: () => void;
  onHeartClick: () => void;
};

const Result = styled.div`
  background-color: var(--tile-background-color);
  height: 5em;
  border-radius: 0.5em;
  padding: 0 0.5em;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 64px;
  width: 64px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InformationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;

const Title = styled.h3``;

const Description = styled.p``;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5em;
  margin-right: 1em;
`;

export const ResultRow = (props: Props) => {
  const {
    imageUrl,
    title,
    description,
    isLiked,
    isPlaying,
    onHeartClick,
    onPlaybackClick,
  } = props;

  return (
    <Result>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <InformationContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InformationContainer>
      <ButtonsContainer>
        <HeartLikeButton isLiked={isLiked} onClick={onHeartClick} />
        <PlayIconButton isPlaying={isPlaying} onClick={onPlaybackClick} />
      </ButtonsContainer>
    </Result>
  );
};
