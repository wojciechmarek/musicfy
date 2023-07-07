import styled from '@emotion/styled';

export interface VfdChannelAnalyzerProps {
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

const BarFrequencyDescription = styled.p`
  color: #1caeae;
  font-size: 0.75em;
  font-weight: bold;
  text-shadow: 0 0 10px #1caeae;
  margin: 0.25em 0;
  text-align: center;
`;

const DecibelText = styled.p`
  color: #1caeae;
  font-size: 0.5em;
  font-weight: bold;
  text-shadow: 0 0 10px #1caeae;
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
  const { left, right } = props;

  return (
    <VfdChannels>
      <VfdSpectrum>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed key={index} isActive={left > 100 - index * 7} />
            ) : (
              <SpectrumBar key={index} isActive={left > 100 - index * 7} />
            )
          )}
          <SpectrumBar isActive />
          <BarFrequencyDescription>LEFT</BarFrequencyDescription>
        </SpectrumColumn>
        <DecibelColumn>
          <DecibelText>+3</DecibelText>
          <DecibelText>0</DecibelText>
          <DecibelText>-3</DecibelText>
          <DecibelText>-5</DecibelText>
          <DecibelText>-10</DecibelText>
          <DecibelText>-20</DecibelText>
          <DecibelText>-∞</DecibelText>
          <BarFrequencyDescription>dB</BarFrequencyDescription>
        </DecibelColumn>
        <SpectrumColumn className="channel-column">
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed key={index} isActive={right > 100 - index * 7} />
            ) : (
              <SpectrumBar key={index} isActive={right > 100 - index * 7} />
            )
          )}
          <SpectrumBar isActive />
          <BarFrequencyDescription>RIGHT</BarFrequencyDescription>
        </SpectrumColumn>
      </VfdSpectrum>
    </VfdChannels>
  );
};
