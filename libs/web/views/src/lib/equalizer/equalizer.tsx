import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface EqualizerProps {}

const EqualizerContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const EqualizerContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

export function Equalizer(props: EqualizerProps) {
  return (
    <EqualizerContainer>
      <EqualizerContent>
        <h1>Welcome to Equalizer!</h1>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
