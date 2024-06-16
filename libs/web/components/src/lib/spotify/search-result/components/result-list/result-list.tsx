import styled from '@emotion/styled';
import { ResultRow } from '../result-row/result-row';

export type Item = {
  imageUrl: string;
  header: string;
  description: string;
  timeInSeconds?: string;
  onClick?: () => void;
};

export type Props = {
  items: Item[];
};

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const ResultList = (props: Props) => {
  const { items } = props;

  return (
    <ResultsList>
      {items.map((item) => (
        <ResultRow
          key={item.header + item.header}
          title={item.header}
          description={item.description}
          imageUrl={item.imageUrl}
        ></ResultRow>
      ))}
    </ResultsList>
  );
};
