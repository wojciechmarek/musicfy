import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface InternetRadioProps {}

const VisualizerContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const VisualizerContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;


const VisualizerTitle = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

export function InternetRadio(props: InternetRadioProps) {
  return (
    <VisualizerContainer>
      <VisualizerContent>
        <VisualizerTitle>Welcome to Internet Radio!</VisualizerTitle>

      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default InternetRadio;
