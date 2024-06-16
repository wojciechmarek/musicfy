import styled from '@emotion/styled';

type Props = {
  title: string;
};

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1em 0 0.5em;
`;

export const SectionTitle = (props: Props) => {
  const { title } = props;

  return <Title>{title}</Title>;
};
