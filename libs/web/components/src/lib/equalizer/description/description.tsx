import styled from '@emotion/styled';
/* eslint-disable-next-line */
export interface DescriptionProps {
  [key: string]: any;
  label: string;
}

const DescriptionContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  color: #fff;
  padding: 0 1em;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 0.5em 0;
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 1em;
`;

export function Description(props: DescriptionProps) {
  const { label, ...rest } = props;

  return (
    <DescriptionContainer {...rest}>
      <HorizontalLine />
      <Label>{label}</Label>
      <HorizontalLine />
    </DescriptionContainer>
  );
}
