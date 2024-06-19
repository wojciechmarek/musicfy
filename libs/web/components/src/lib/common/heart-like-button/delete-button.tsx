import styled from '@emotion/styled';
import { Trash2Icon } from 'lucide-react';

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

    &:hover {
      stroke: var(--tile-icon-buttons-hover-color);
    }
  }
`;

export const DeleteButton = (props: Props) => {
  const { isLiked, onClick } = props;

  return (
    <IconButton onClick={onClick} isLiked={isLiked}>
      <Trash2Icon className="icon" />
    </IconButton>
  );
};
