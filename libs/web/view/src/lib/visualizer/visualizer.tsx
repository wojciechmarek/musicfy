import { useEffect, useRef, useState } from 'react';
import {
  CanvasButtonsContainer,
  CanvasContainer,
  CanvasButton,
  VisualizerContainer,
  VisualizerContent,
  VisualizerTitle,
} from './visualizer.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/utility/store';

/* eslint-disable-next-line */
export interface VisualizerProps {}

const enum Effect {
  OFF,
  BARS,
  OSCILLATOR,
  WAVE,
  NOISE,
  FRACTALS,
}

export function Visualizer(props: VisualizerProps) {  
  const { frequencies, bufferSize } = useSelector(
    (state: RootState) => state.playback.analysis
  );

  const [effect, setEffect] = useState(Effect.BARS);

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
    switch (effect) {
      case Effect.BARS:
        if (canvasCtx && canvas.current) {
          canvasCtx.clearRect(0, 0, 400, 100);
          const barWidth = (canvas.current.width / bufferSize) * 0.5;

          let x = 0;

          for (let i = 0; i < bufferSize; i++) {
            const barHeight = frequencies[i];

            canvasCtx.fillStyle = "#666bef";
            canvasCtx.fillRect(
              x,
              canvas.current.height - barHeight,
              barWidth,
              barHeight
            );

            x += barWidth + 1;
          }
        }
        break;

      case Effect.OSCILLATOR:
        if (canvasCtx && canvas.current) {
          canvasCtx.clearRect(0, 0, 400, 100);
          
          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = "#666bef";
          canvasCtx.beginPath();

          const sliceWidth = canvas.current.width * 10.0 / bufferSize;
          let x = 0;

          for(let i = 0; i < bufferSize; i++) {
            const v = frequencies[i] / 128.0;
            const y = v * canvas.current.height / 2;

            if(i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
          }

          canvasCtx.lineTo(canvas.current.width, canvas.current.height / 2);
          canvasCtx.stroke();
        }
        break;

      case Effect.OFF:
      default:
        if (canvasCtx && canvas.current) {
          canvasCtx.clearRect(
            0,
            0,
            canvas.current.width,
            canvas.current.height
          );
        }
        break;
    }
  }, [canvasCtx, canvas, frequencies, bufferSize, effect]);

  return (
    <VisualizerContainer>
      <VisualizerContent>
        <VisualizerTitle>Audio Sound Visualizer</VisualizerTitle>
        <CanvasContainer>
          <canvas ref={canvas} height={340} width={1000} />
        </CanvasContainer>
        <CanvasButtonsContainer>
          <CanvasButton
            isActive={effect === Effect.OFF}
            onClick={() => setEffect(Effect.OFF)}
          >
            OFF
          </CanvasButton>
          <CanvasButton
            isActive={effect === Effect.BARS}
            onClick={() => setEffect(Effect.BARS)}
          >
            BARS
          </CanvasButton>
          <CanvasButton
            isActive={effect === Effect.OSCILLATOR}
            onClick={() => setEffect(Effect.OSCILLATOR)}
          >
            OSCILLATOR
          </CanvasButton>
          <CanvasButton>WAVE</CanvasButton>
          <CanvasButton>NOISE</CanvasButton>
          <CanvasButton>FRACTALS</CanvasButton>
          {Array.from(Array(10).keys()).map((i) => (
            <CanvasButton key={i}>EFFECT #{i}</CanvasButton>
          ))}
        </CanvasButtonsContainer>
      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
