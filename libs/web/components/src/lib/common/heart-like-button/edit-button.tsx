import styled from '@emotion/styled';
import { FilePenLine, Heart } from 'lucide-react';

type Props = {
  isLiked: boolean;
  onClick: () => void;
};

const IconButton = styled.button<{ isLiked?: boolean }>`
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  .icon {
    stroke: var(--tile-button-hover-color);
  }
`;

export const EditButton = (props: Props) => {
  const { isLiked, onClick } = props;

  return (
    <IconButton onClick={onClick} isLiked={isLiked}>
      <FilePenLine className="icon" />
    </IconButton>
  );
};
