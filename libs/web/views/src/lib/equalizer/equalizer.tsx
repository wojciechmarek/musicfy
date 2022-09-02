import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface EqualizerProps {}

const StyledEqualizer = styled.div`
  color: pink;
`;

export function Equalizer(props: EqualizerProps) {
  return (
    <StyledEqualizer>
      <h1>Welcome to Equalizer!</h1>
    </StyledEqualizer>
  );
}

export default Equalizer;
