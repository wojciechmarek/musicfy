import styled from '@emotion/styled';
import { Heart } from 'lucide-react';
import { PlayIconButton } from '../../../../common/play-icon-button/play-icon-button';
import { useState } from 'react';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

export const Result = styled.div`
  background-color: var(--tile-background-color);
  height: 5em;
  border-radius: 0.5em;
  padding: 0 0.5em;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 64px;
  width: 64px;
`;

export const Image = styled.img`
  height: 100%;
`;

export const InformationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;

export const Title = styled.h3``;

export const Description = styled.p``;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5em;
  margin-right: 1em;
`;

export const IconButton = styled.button<{ isLiked?: boolean }>`
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  .icon {
    fill: ${(props) =>
      props.isLiked ? 'red' : 'var(--tile-button-hover-color)'};
    stroke: ${(props) =>
      props.isLiked ? 'red' : 'var(--tile-button-hover-color)'};
  }
`;

export const PlaybackButton = styled.button`
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
        <IconButton onClick={handleOnLikeClick} isLiked={isLiked}>
          <Heart className="icon" />
        </IconButton>
        <PlayIconButton isPlaying={false} onClick={() => alert(12)} />
      </ButtonsContainer>
    </Result>
  );
};
