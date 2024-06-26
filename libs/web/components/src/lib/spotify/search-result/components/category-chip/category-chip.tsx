import styled from '@emotion/styled';

type Props = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Chip = styled.button<{
  isActive?: boolean;
}>`
  border: none;
  background-color: ${(props) =>
    props.isActive ? 'var(--accent-blue-color)' : 'var(--tile-button-color)'};
  color: ${(props) =>
    props.isActive ? 'var(--font-accent-color)' : 'var(--font-color)'};
  box-shadow: ${(props) => (props.isActive ? '0 0 10px #2b31df' : 'none')};
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isActive
        ? 'var(--accent-blue-hover-color)'
        : 'var(--tile-button-hover-color)'};
  }
`;

export const CategoryChip = (props: Props) => {
  const { isActive, title, onClick } = props;
  return (
    <Chip onClick={() => onClick?.()} isActive={isActive}>
      {title}
    </Chip>
  );
};
