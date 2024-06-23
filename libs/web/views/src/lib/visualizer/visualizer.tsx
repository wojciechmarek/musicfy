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
import { RootState } from '@musicfy/web/utils/store';
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
    (state: RootState) => state.playback.analysis,
  );

  const [effect, setEffect] = useState(Effect.BARS);

  const canvasContainerRef = useRef<HTMLDivElement>(null);

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
  } = useCanvasEffect(
    canvasContainerRef,
    canvasCtx,
    canvas.current,
    bufferSize,
  );

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
  }, [
    frequencies,
    effect,
    oscillatorEffect,
    barsEffect,
    offEffect,
    waveEffect,
    noiseEffect,
    fractalsEffect,
  ]);

  return (
    <VisualizerContainer>
      <VisualizerContent>
        <VisualizerTitle>Visualizer</VisualizerTitle>
        <CanvasContainer ref={canvasContainerRef}>
          <canvas
            ref={canvas}
            height={canvasContainerRef?.current?.clientHeight}
            width={canvasContainerRef?.current?.clientWidth}
          />
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
            isActive={effect === Effect.NOISE}
            onClick={() => setEffect(Effect.NOISE)}
          >
            BARS 2
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
          {/* <CanvasButton
            isActive={effect === Effect.FRACTALS}
            onClick={() => setEffect(Effect.FRACTALS)}
          >
            FRACTALS
          </CanvasButton> */}
        </CanvasButtonsContainer>
      </VisualizerContent>
    </VisualizerContainer>
  );
}

export default Visualizer;
