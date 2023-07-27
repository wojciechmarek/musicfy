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
import { useCanvasEffect } from './use-canvas-effect.hook';

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
  }

  const {
    offEffect,
    barsEffect,
    oscillatorEffect,
    fractalsEffect,
    waveEffect,
    noiseEffect,
  } = useCanvasEffect(canvasCtx, canvas.current, bufferSize);

  useEffect(() => {
    switch (effect) {
      case Effect.BARS:
        barsEffect(frequencies);
        break;

      case Effect.OSCILLATOR:
        oscillatorEffect(frequencies);
        break;

      case Effect.FRACTALS:
        fractalsEffect(frequencies);
        break;

      case Effect.WAVE:
        waveEffect(frequencies);
        break;

      case Effect.NOISE:
        noiseEffect(frequencies);
        break;

      case Effect.OFF:
      default:
        offEffect();
        break;
    }
  }, [frequencies, effect, oscillatorEffect, barsEffect, offEffect]);

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
          <CanvasButton
            isActive={effect === Effect.WAVE}
            onClick={() => setEffect(Effect.WAVE)}
          >
            WAVE
          </CanvasButton>
          <CanvasButton
            isActive={effect === Effect.NOISE}
            onClick={() => setEffect(Effect.NOISE)}
          >
            NOISE
          </CanvasButton>
          <CanvasButton
            isActive={effect === Effect.FRACTALS}
            onClick={() => setEffect(Effect.FRACTALS)}
          >
            FRACTALS
          </CanvasButton>
          {Array.from(Array(10).keys()).map((i) => (
            <CanvasButton key={i}>EFFECT #{i}</CanvasButton>
          ))}
        </CanvasButtonsContainer>
      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
