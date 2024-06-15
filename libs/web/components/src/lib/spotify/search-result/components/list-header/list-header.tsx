import styled from '@emotion/styled';

type Props = {
  title: string;
};

const Header = styled.h2``;

export const ListHeader = (props: Props) => {
  const { title } = props;

  return <Header>{title}</Header>;
};
