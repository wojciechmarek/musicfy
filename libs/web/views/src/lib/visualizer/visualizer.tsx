import { useRef } from 'react';
import {
  CanvasContainer,
  CanvasEffects,

  EffectTileButton,
  VisualizerContainer,
  VisualizerContent,
  VisualizerTitle,
} from './visualizer.styled';

/* eslint-disable-next-line */
export interface VisualizerProps {}

export function Visualizer(props: VisualizerProps) {
  // Get a canvas defined with ID "oscilloscope"
  const canvas = useRef<HTMLCanvasElement>(null);
  const canvasCtx = canvas.current?.getContext('2d');

  if (canvasCtx && canvas.current) {
    canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.lineWidth = 1;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
    canvasCtx.beginPath();
    canvasCtx.moveTo(0, 0);
    canvasCtx.lineTo(100, 100);
    canvasCtx.stroke();

  }

  return (
    <VisualizerContainer>
      <VisualizerContent>
        <VisualizerTitle>Audio Sound Visualizer</VisualizerTitle>
        <CanvasContainer>
          <canvas ref={canvas} id="oscilloscope" width="100%" height="100px" />
        </CanvasContainer>
        <CanvasEffects>
          <EffectTileButton>OFF</EffectTileButton>
          <EffectTileButton>BARS</EffectTileButton>
          <EffectTileButton>OSCILLATOR</EffectTileButton>
          <EffectTileButton>WAVE</EffectTileButton>
          <EffectTileButton>NOISE</EffectTileButton>
          <EffectTileButton>FRACTALS</EffectTileButton>
          {Array.from(Array(10).keys()).map((i) => (
            <EffectTileButton key={i}>EFFECT #{i}</EffectTileButton>
          ))}  
        </CanvasEffects>
      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
