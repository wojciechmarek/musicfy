import styled from '@emotion/styled';

export interface VfdSpectrumAnalyzerProps {
  columnFrequencies: string[];
  columnValues: number[];
}

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

const VfdSpectrum = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const VfdSpectrumAnalyzer = (props: VfdSpectrumAnalyzerProps) => {
  const { columnFrequencies, columnValues } = props;
  return (
    <VfdSpectrum>
      {columnFrequencies.map((i, index) => (
        <SpectrumColumn>
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed key={index} isActive={false} />
            ) : (
              <SpectrumBar key={index} isActive={false} />
            )
          )}
          <SpectrumBar isActive />
          <BarFrequencyDescription>{i}</BarFrequencyDescription>
        </SpectrumColumn>
      ))}
    </VfdSpectrum>
  );
};
