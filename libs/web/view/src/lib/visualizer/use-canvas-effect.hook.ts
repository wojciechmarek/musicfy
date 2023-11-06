export const useCanvasEffect = (
  canvasContainerRef: React.RefObject<HTMLDivElement>,
  context: CanvasRenderingContext2D | null | undefined,
  canvas: HTMLCanvasElement | null,
  bufferSize: number,
) => {
  const canvasHeight = canvasContainerRef?.current?.clientHeight ?? 0;
  const canvasWidth = canvasContainerRef?.current?.clientWidth ?? 0;

  // ... code
  const offEffect = () => {
    if (context && canvas) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);
    }
  };

  const barsEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);
      const barWidth = (canvas.width / bufferSize) * 0.5;

      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const barHeight = frequencies[i] * 1.55;

        context.fillStyle = '#666bef';
        context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
  };

  const waveEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);

      context.lineWidth = 2;
      context.strokeStyle = '#666bef';
      context.beginPath();

      const sliceWidth = (canvas.width * 10.0) / bufferSize;
      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const v = frequencies[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }

        x += sliceWidth;
      }

      context.lineTo(canvas.width, canvas.height / 2);
      context.stroke();
    }
  };

  const oscillatorEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);

      context.lineWidth = 2;
      context.strokeStyle = '#666bef';
      context.beginPath();

      const sliceWidth = (canvas.width * 2.0) / bufferSize;
      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const v = frequencies[256 - i] / 256.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }

        x += sliceWidth;
      }

      context.lineTo(canvas.width, canvas.height / 2);
      context.stroke();
    }
  };

  const fractalsEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);
      const barWidth = (canvas.width / bufferSize) * 0.5;

      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const barHeight = canvasHeight;

        const r = barHeight + 25 * (frequencies[i] / bufferSize);
        const g = 250 * (frequencies[i] / bufferSize);
        const b = (frequencies[i] / bufferSize) * 200;

        context.fillStyle = `rgb(${r},${g},${b})`;
        context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
  };

  const noiseEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);
      context.lineWidth = 10;

      context.beginPath();

      const sliceWidth = (canvas.width * 10.0) / bufferSize;
      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const v = frequencies[i] / 256.0;
        const y = (v * canvas.height) / 1;

        const r = i + 25 * (i / bufferSize);
        const g = 250 * (i / bufferSize);
        const b = (i / bufferSize) * 50;

        context.strokeStyle = `rgb(${r},${g},${b})`;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }

        x += sliceWidth;
      }

      context.lineTo(canvas.width, canvas.height / 2);
      context.stroke();
    }
  };

  return {
    offEffect,
    barsEffect,
    waveEffect,
    oscillatorEffect,
    fractalsEffect,
    noiseEffect,
  };
};
