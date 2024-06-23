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

      const sliceWidth = (canvas.width * 2) / bufferSize;
      let x = 0;

      for (let i = 0; i < bufferSize; i++) {
        const v = frequencies[i] / 256.0;
        const y = (v * canvas.height) / 1.5;

        context.strokeStyle = `rgb(${frequencies[100] * i},${
          frequencies[200]
        },${frequencies[300] * 3 * i})`;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }

        x += sliceWidth;
      }

      context.lineTo(canvas.width, canvas.height);
      context.stroke();
    }
  };

  const drawFractalTree = (
    context,
    startX,
    startY,
    length,
    angle,
    branchWidth,
    color1,
    color2,
  ) => {
    context.beginPath();
    context.save();

    context.strokeStyle = color1;
    context.fillStyle = color2;
    context.lineWidth = branchWidth;
    context.translate(startX, startY);
    context.rotate((angle * Math.PI) / 180);
    context.moveTo(0, 0);
    context.lineTo(0, -length);
    context.stroke();

    if (length < 10) {
      context.restore();
      return;
    }

    drawFractalTree(
      context,
      0,
      -length,
      length * 0.8,
      angle + 15,
      branchWidth * 0.7,
      color1,
      color2,
    );
    drawFractalTree(
      context,
      0,
      -length,
      length * 0.8,
      angle - 15,
      branchWidth * 0.7,
      color1,
      color2,
    );

    context.restore();
  };

  const fractalsEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Parameters for the fractal tree
      const startX = canvas.width / 2;
      const startY = canvas.height - 80;
      const length = 120;
      const angle = 0;
      const branchWidth = 10;
      const color1 = '#8b4513';
      const color2 = '#228B22';

      drawFractalTree(
        context,
        startX,
        startY,
        length,
        angle,
        branchWidth,
        color1,
        color2,
      );
    }
  };

  // const noiseEffect = (frequencies: number[]) => {
  //   if (context && canvas) {
  //     context.clearRect(0, 0, canvasHeight, canvasWidth);
  //     context.beginPath();

  //     const sliceWidth = (canvas.width * 10.0) / bufferSize;
  //     let x = 0;

  //     for (let i = 0; i < bufferSize; i++) {
  //       const v = frequencies[i] / 256.0;
  //       const y = (v * canvas.height) / 1;

  //       context.strokeStyle = `rgb(${frequencies[100] * i},${
  //         frequencies[200]
  //       },${frequencies[300] * i})`;

  //       context.lineWidth = frequencies[i] / 5;

  //       if (i === 0) {
  //         context.moveTo(x, y);
  //       } else {
  //         context.lineTo(x, y);
  //       }

  //       x += sliceWidth;
  //     }

  //     context.lineTo(canvas.width, canvas.height / 2);
  //     context.stroke();
  //   }
  // };

  const noiseEffect = (frequencies: number[]) => {
    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Limit the number of bars to 30
      const numBars = Math.min(30, frequencies.length);
      const barWidth = (canvas.width / numBars) * 0.8; // Adjusted for wider bars

      let x = 0;

      for (let i = 0; i < numBars; i++) {
        const barHeight = frequencies[i] * 1.55;

        context.fillStyle = '#666bef';
        context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        // Add text value below each bar
        context.fillStyle = '#FFFFFF'; // Text color set to white
        context.font = '12px Arial'; // Font style
        context.fillText(
          frequencies[i].toFixed(2),
          x,
          canvas.height - barHeight + barHeight + 15,
        );

        x += barWidth + 5; // Increase the gap between bars
      }
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
