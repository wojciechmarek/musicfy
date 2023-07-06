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

export function Visualizer(props: VisualizerProps) {
  return (
    <VisualizerContainer>
      <VisualizerContent>
        <h1>Welcome to Visualizer!</h1>
      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
