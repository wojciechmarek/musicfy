import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface VisualizerProps {}

const StyledVisualizer = styled.div`
  color: pink;
`;

export function Visualizer(props: VisualizerProps) {
  return (
    <StyledVisualizer>
      <h1>Welcome to Visualizer!</h1>
    </StyledVisualizer>
  );
}

export default Visualizer;
