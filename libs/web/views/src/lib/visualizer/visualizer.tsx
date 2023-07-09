import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface VisualizerProps {}

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

const Canvas = styled.canvas`
  margin-top: 1em;
  width: 100%;
  height: 30em;
  background-color: #272a35;
`;

export function Visualizer(props: VisualizerProps) {
  return (
    <VisualizerContainer>
      <VisualizerContent>
        <VisualizerTitle>Welcome to Visualizer!</VisualizerTitle>
        <Canvas />

      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
