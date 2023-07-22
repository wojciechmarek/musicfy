import styled from '@emotion/styled';
import { useRef } from 'react';

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

  // Get a canvas defined with ID "oscilloscope"
  const canvas = useRef<HTMLCanvasElement>(null);
  const canvasCtx = canvas.current?.getContext("2d");

  if (!(canvasCtx && canvas.current)) {
    return null;
  }

  // canvasCtx.fillStyle = "rgb(200, 200, 200)";
  // canvasCtx.fillRect(0, 0, canvas.current.width, canvas.current.height);

  // canvasCtx.lineWidth = 2;
  // canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  // canvasCtx.moveTo(4, 75);
  // canvasCtx.lineTo(500, 75);
  // canvasCtx.stroke();

  // canvasCtx.beginPath();
  // canvasCtx.lineTo(canvas.current.width, canvas.current.height / 2);
  // canvasCtx.stroke();

  return (
    <VisualizerContainer>
      <VisualizerContent>
        <VisualizerTitle>Welcome to Visualizer!</VisualizerTitle>
        <Canvas ref={canvas} width="120" height="30"></Canvas>

      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
