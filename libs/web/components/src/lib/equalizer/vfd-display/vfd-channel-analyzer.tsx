import styled from '@emotion/styled';

export interface VfdChannelAnalyzerProps {
  isEnabled: boolean;
  left: number;
  right: number;
}

const VfdSpectrum = styled.div`
  display: flex;
  gap: 0.5em;
`;

const VfdChannels = styled.div``;

const SpectrumColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  width: 1.5em;

  &.channel-column {
    width: 2.5em;
  }
`;

const SpectrumBar = styled.div<{
  isActive: boolean;
}>`
  width: 100%;
  height: 0.25em;
  background-color: ${(props) => (props.isActive ? '#1caeae' : '#062626')};
  box-shadow: 0 0 10px ${(props) => (props.isActive ? '#1caeae ' : 'none')};
`;

const SpectrumBarRed = styled.div<{
  isActive: boolean;
}>`
  width: 100%;
  height: 0.25em;
  background-color: ${(props) => (props.isActive ? '#9c341a' : '#250c06')};
  box-shadow: 0 0 10px ${(props) => (props.isActive ? '#9c341a ' : 'none')};
`;

const BarFrequencyDescription = styled.p<{
  isActive?: boolean;
}>`
  color: ${(props) => (props.isActive ? '#1caeae' : '#062626')};
  font-size: 0.75em;
  font-weight: bold;
  text-shadow: ${(props) => (props.isActive ? '0 0 10px #1caeae' : 'none')};
  margin: 0.25em 0;
  text-align: center;
`;

const DecibelText = styled.p<{
  isActive?: boolean;
}>`
  color: ${(props) => (props.isActive ? '#1caeae' : '#062626')};
  font-size: 0.5em;
  font-weight: bold;
  text-shadow: ${(props) => (props.isActive ? '0 0 10px #1caeae' : 'none')};
  text-align: center;
  margin-bottom: 0.5em;

  &:nth-of-type(6) {
    margin-bottom: 0;
  }
`;

const DecibelColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  width: 1.5em;
`;

export const VfdChannelAnalyzer = (props: VfdChannelAnalyzerProps) => {
  const { isEnabled, left, right } = props;

  return (
    <VfdChannels>
      <VfdSpectrum>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed key={index} isActive={isEnabled && (left > 100 - index * 7)} />
            ) : (
              <SpectrumBar key={index} isActive={isEnabled && (left > 100 - index * 7)} />
            )
          )}
          <SpectrumBar isActive={isEnabled} />
          <BarFrequencyDescription isActive={isEnabled}>LEFT</BarFrequencyDescription>
        </SpectrumColumn>
        <DecibelColumn>
          <DecibelText isActive={isEnabled}>+3</DecibelText>
          <DecibelText isActive={isEnabled}>0</DecibelText>
          <DecibelText isActive={isEnabled}>-3</DecibelText>
          <DecibelText isActive={isEnabled}>-5</DecibelText>
          <DecibelText isActive={isEnabled}>-10</DecibelText>
          <DecibelText isActive={isEnabled}>-20</DecibelText>
          <DecibelText isActive={isEnabled}>-∞</DecibelText>
          <BarFrequencyDescription isActive={isEnabled}>dB</BarFrequencyDescription>
        </DecibelColumn>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed key={index} isActive={isEnabled && (right > 100 - index * 7)} />
            ) : (
              <SpectrumBar key={index} isActive={isEnabled && (right > 100 - index * 7)} />
            )
          )}
          <SpectrumBar isActive={isEnabled} />
          <BarFrequencyDescription isActive={isEnabled}>RIGHT</BarFrequencyDescription>
        </SpectrumColumn>
      </VfdSpectrum>
    </VfdChannels>
  );
};
