import styled from '@emotion/styled';
import { useState } from 'react';
import { HeartLikeButton } from '../heart-like-button/heart-like-button';
import { PlayIconButton } from '../play-icon-button/play-icon-button';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
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
  height: 100%;
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

const PlaybackButton = styled.button`
  border-style: none;
  color: var(--font-color);
  background-color: var(--accent-color);
  height: 3em;
  width: 3em;
  border-radius: 50%;
`;

export const ResultRow = (props: Props) => {
  const { imageUrl, title, description } = props;
  const [isLiked, setIsLiked] = useState(false);

  const handleOnLikeClick = () => {
    setIsLiked(!isLiked);
  };
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
        <HeartLikeButton isLiked={isLiked} onClick={handleOnLikeClick} />
        <PlayIconButton isPlaying={false} onClick={() => console.log('play')} />
      </ButtonsContainer>
    </Result>
  );
};
