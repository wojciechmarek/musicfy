import { BarFrequencyDescription, SpectrumBar, SpectrumBarRed, SpectrumColumn, VfdSpectrum } from "./vfd-spectrum.styled";

export interface VfdSpectrumAnalyzerProps {
  isEnabled: boolean;
  frequencies: number[];
  frequencyBars: {
    label: string;
    frequencyId: number;
  }[];
}

export const VfdSpectrumAnalyzer = (props: VfdSpectrumAnalyzerProps) => {
  const { isEnabled, frequencyBars, frequencies } = props;
  
  return (
    <VfdSpectrum>
      {frequencyBars.map((bar, columnIndex) => (
        <SpectrumColumn key={bar.frequencyId}>
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed
                key={index}
                isActive={
                  isEnabled &&
                  frequencies[bar.frequencyId] - 100 - (55 - columnIndex * 5) >=
                    100 - index * 10
                }
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={
                  isEnabled &&
                  frequencies[bar.frequencyId] - 100 - (55 - columnIndex * 5)>=
                    100 - index * 10
                }
              />
            )
          )}
          <SpectrumBar isActive={isEnabled} />
          <BarFrequencyDescription isActive={isEnabled}>
            {bar.label}
          </BarFrequencyDescription>
        </SpectrumColumn>
      ))}
    </VfdSpectrum>
  );
};
