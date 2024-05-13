import { BarsMode } from "@musicfy/web/utils/models";
import { BarFrequencyDescription, SpectrumBar, SpectrumBarRed, SpectrumColumn, VfdSpectrum } from "./vfd-spectrum.styled";

export interface VfdSpectrumAnalyzerProps {
  isEnabled: boolean;
  frequencies: number[];
  frequencyBars: {
    label: string;
    frequencyId: number;
  }[];
  barsMode: BarsMode;
}

export const VfdSpectrumAnalyzer = (props: VfdSpectrumAnalyzerProps) => {
  const { isEnabled, frequencyBars, frequencies, barsMode } = props;

  const isBarActive = (value: number, index: number) => {
    switch (barsMode) {
      case 'bars':
        return value - 100 - (55 - index * 5) >= 100 - index * 10
  
      case 'pointer':
        return value - 100 - (55 - index * 5) >= 100 - index * 10 &&
        !(value - 100 - (55 - (index-1) * 5) >= 100 - (index-1) * 10);
      
      case 'off':
        return false;
    }
  };
  
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
                  isBarActive(frequencies[bar.frequencyId], index)
                }
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={
                  isEnabled &&
                  isBarActive(frequencies[bar.frequencyId], index)
                }
              />
            )
          )}
          <SpectrumBar isActive={isEnabled && barsMode === "bars"} />
          <BarFrequencyDescription isActive={isEnabled}>
            {bar.label}
          </BarFrequencyDescription>
        </SpectrumColumn>
      ))}
    </VfdSpectrum>
  );
};
