import styled from '@emotion/styled';

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

export const ResultRow = (props: Props) => {
  const { imageUrl, title, description } = props;
  return (
    <Result>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <InformationContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InformationContainer>
    </Result>
  );
};
