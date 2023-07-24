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
}

export const VfdChannelAnalyzer = (props: VfdChannelAnalyzerProps) => {
  const { isEnabled, left, right } = props;

  return (
    <VfdChannels>
      <VfdSpectrum>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed
                key={index}
                isActive={isEnabled && left - 100 >= 100 - index * 10}
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={isEnabled && left - 100 >= 100 - index * 10}
              />
            )
          )}
          <SpectrumBar isActive={isEnabled} />
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
                isActive={isEnabled && right - 100 >= 100 - index * 10}
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={isEnabled && right - 100 >= 100 - index * 10}
              />
            )
          )}
          <SpectrumBar isActive={isEnabled} />
          <BarFrequencyDescription isActive={isEnabled}>
            RIGHT
          </BarFrequencyDescription>
        </SpectrumColumn>
      </VfdSpectrum>
    </VfdChannels>
  );
};
