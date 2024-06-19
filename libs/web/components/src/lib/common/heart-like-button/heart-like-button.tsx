import styled from '@emotion/styled';
import { Heart } from 'lucide-react';

type Props = {
  isLiked: boolean;
  onClick: () => void;
};

const IconButton = styled.button<{ isLiked?: boolean }>`
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  .icon {
    fill: ${(props) =>
      props.isLiked
        ? 'var(--accent-red-color)'
        : 'var(--tile-button-hover-color)'};
    stroke: ${(props) =>
      props.isLiked
        ? 'var(--accent-red-color)'
        : 'var(--tile-button-hover-color)'};

    &:hover {
      fill: ${(props) =>
        props.isLiked
          ? 'var(--accent-red-color)'
          : 'var(--tile-icon-buttons-hover-color)'};
      stroke: ${(props) =>
        props.isLiked
          ? 'var(--accent-red-color)'
          : 'var(--tile-icon-buttons-hover-color)'};
    }
  }
`;

export const HeartLikeButton = (props: Props) => {
  const { isLiked, onClick } = props;

  return (
    <IconButton onClick={onClick} isLiked={isLiked}>
      <Heart className="icon" />
    </IconButton>
  );
};
