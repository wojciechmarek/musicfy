import styled from '@emotion/styled';

export interface VfdSpectrumAnalyzerProps {
  isEnabled: boolean;
  headers: string[];
  values: number[];
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

const VfdSpectrum = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const VfdSpectrumAnalyzer = (props: VfdSpectrumAnalyzerProps) => {
  const { isEnabled, headers, values } = props;
  return (
    <VfdSpectrum>
      {headers.map((i, columnIndex) => (
        <SpectrumColumn>
          {Array.from({ length: 12 }, (_, index) =>
            index < 3 ? (
              <SpectrumBarRed
                key={index}
                isActive={isEnabled && (values[columnIndex] - 100) >= 100 - index * 9}
              />
            ) : (
              <SpectrumBar
                key={index}
                isActive={isEnabled && (values[columnIndex] - 100) >= 100 - index * 9}
              />
            )
          )}
          <SpectrumBar isActive={isEnabled} />
          <BarFrequencyDescription isActive={isEnabled}>
            {i}
          </BarFrequencyDescription>
        </SpectrumColumn>
      ))}
    </VfdSpectrum>
  );
};
