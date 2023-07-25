import { useEffect, useRef, useState } from 'react';
import {
  CanvasButtonsContainer,
  CanvasContainer,
  CanvasButton,
  VisualizerContainer,
  VisualizerContent,
  VisualizerTitle,
} from './visualizer.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setSamples } from '@musicfy/web/utility/store';

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

const enum Sample {
  SAMPLE_64 = 64,
  SAMPLE_128 = 128,
  SAMPLE_256 = 256,
  SAMPLE_512 = 512,
  SAMPLE_1024 = 1024,
  SAMPLE_2048 = 2048,
}

export function Visualizer(props: VisualizerProps) {
  const dispatch = useDispatch();
  
  const { frequencies, bufferSize, samples } = useSelector(
    (state: RootState) => state.playback.analysis
  );

  const [effect, setEffect] = useState(Effect.OFF);

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

  const handleOnSampleChange = (sample: Sample) => {
    dispatch(setSamples(sample));
  }

  useEffect(() => {
    switch (effect) {
      case Effect.BARS:
        if (canvasCtx && canvas.current) {
          canvasCtx.clearRect(0, 0, 400, 100);
          const barWidth = (canvas.current.width / bufferSize) * 0.4;

          let x = 0;

          for (let i = 0; i < bufferSize; i++) {
            const barHeight = frequencies[i];

            const r = 255; //barHeight + 25 * (i / bufferSize);
            const g = 250; // * (i / bufferSize);
            const b = 50;

            canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
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
        <CanvasButtonsContainer>
          <CanvasButton
            isActive={samples === Sample.SAMPLE_64}
            onClick={() => handleOnSampleChange(Sample.SAMPLE_64)}
          >
            64 SAMPLES
          </CanvasButton>
          <CanvasButton
            isActive={samples === Sample.SAMPLE_128}
            onClick={() => handleOnSampleChange(Sample.SAMPLE_128)}
          >
            128
          </CanvasButton>
          <CanvasButton
            isActive={samples === Sample.SAMPLE_256}
            onClick={() => handleOnSampleChange(Sample.SAMPLE_256)}
          >
            256
          </CanvasButton>
          <CanvasButton
            isActive={samples === Sample.SAMPLE_512}
            onClick={() => handleOnSampleChange(Sample.SAMPLE_512)}
          >
            512
          </CanvasButton>
          <CanvasButton
            isActive={samples === Sample.SAMPLE_1024}
            onClick={() => handleOnSampleChange(Sample.SAMPLE_1024)}
          >
            1024
          </CanvasButton>
          <CanvasButton
            isActive={samples === Sample.SAMPLE_2048}
            onClick={() => handleOnSampleChange(Sample.SAMPLE_2048)}
          >
            2048
          </CanvasButton>
        </CanvasButtonsContainer>
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
