import { useEffect, useRef } from 'react';
import {
  CanvasContainer,
  CanvasEffects,

  EffectTileButton,
  VisualizerContainer,
  VisualizerContent,
  VisualizerTitle,
} from './visualizer.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/utility/store';

/* eslint-disable-next-line */
export interface VisualizerProps {}

export function Visualizer(props: VisualizerProps) {
  const { frequencies, bufferSize } = useSelector((state: RootState) => state.playback.analysis);

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

  useEffect(() => {
    if (canvasCtx && canvas.current) {
      canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      const barWidth = (canvas.current.width / bufferSize) * 2.5;

      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const barHeight = frequencies[i];
  
        const r = barHeight + 25 * (i / bufferSize);
        const g = 250 * (i / bufferSize);
        const b = 50;
  
        canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        canvasCtx.fillRect(x, canvas.current.height - barHeight, barWidth, barHeight);
  
        x += barWidth + 1;
      }
    }
  
  }, [canvasCtx, canvas, frequencies, bufferSize]);

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
