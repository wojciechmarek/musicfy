import { BarsMode } from '@musicfy/web/utils/models';
import {
  BarFrequencyDescription,
  DecibelColumn,
  DecibelText,
  SpectrumBar,
  SpectrumBarRed,
  SpectrumColumn,
  VfdChannels,
  VfdSpectrum,
} from './vfd-channel-analyzer.styled';

export interface VfdChannelAnalyzerProps {
  isEnabled: boolean;
  left: number;
  right: number;
  barsMode: BarsMode;
}

export const VfdChannelAnalyzer = (props: VfdChannelAnalyzerProps) => {
  const { isEnabled, left, right, barsMode } = props;

  const isBarActive = (value: number, index: number) => {
    switch (barsMode) {
      case 'bars':
        return value - 50 >= 100 - index * 10;
  
      case 'pointer':
        return (value - 50 >= 100 - index * 10) && !(value - 50 >= 100 - (index-1) * 10);
      
      case 'off':
        return false;
    }
  };

  return (
    <VfdChannels>
      <VfdSpectrum>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed
                key={index}
                isActive={isEnabled && isBarActive(left, index)}
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={isEnabled && isBarActive(left, index)}
              />
            ),
          )}
          <SpectrumBar isActive={isEnabled && barsMode === "bars"} />
          <BarFrequencyDescription isActive={isEnabled}>
            LEFT
          </BarFrequencyDescription>
        </SpectrumColumn>
        <DecibelColumn>
          <DecibelText isActive={isEnabled}>+3</DecibelText>
          <DecibelText isActive={isEnabled}>0</DecibelText>
          <DecibelText isActive={isEnabled}>-3</DecibelText>
          <DecibelText isActive={isEnabled}>-5</DecibelText>
          <DecibelText isActive={isEnabled}>-10</DecibelText>
          <DecibelText isActive={isEnabled}>-20</DecibelText>
          <DecibelText isActive={isEnabled}>-∞</DecibelText>
          <BarFrequencyDescription className="dB" isActive={isEnabled}>
            dB
          </BarFrequencyDescription>
        </DecibelColumn>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed
                key={index}
                isActive={isEnabled && isBarActive(right, index)}
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={isEnabled && isBarActive(right, index)}
              />
            ),
          )}
          <SpectrumBar isActive={isEnabled && barsMode === "bars"} />
          <BarFrequencyDescription isActive={isEnabled}>
            RIGHT
          </BarFrequencyDescription>
        </SpectrumColumn>
      </VfdSpectrum>
    </VfdChannels>
  );
};
