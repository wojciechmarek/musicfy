import styled from "@emotion/styled";

export const VfdSpectrum = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const VfdChannels = styled.div``;

export const SpectrumColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  width: 2.5em;
`;

export const SpectrumBar = styled.div<{
  isActive: boolean;
}>`
  width: 100%;
  height: 0.25em;
  background-color: ${(props) => (props.isActive ? '#1caeae' : '#062626')};
  box-shadow: 0 0 10px ${(props) => (props.isActive ? '#1caeae ' : 'none')};
`;

export const SpectrumBarRed = styled.div<{
  isActive: boolean;
}>`
  width: 100%;
  height: 0.25em;
  background-color: ${(props) => (props.isActive ? '#9c341a' : '#250c06')};
  box-shadow: 0 0 10px ${(props) => (props.isActive ? '#9c341a ' : 'none')};
`;

export const BarFrequencyDescription = styled.p<{
  isActive?: boolean;
}>`
  color: ${(props) => (props.isActive ? '#1caeae' : '#062626')};
  font-size: 0.75em;
  font-weight: bold;
  text-shadow: ${(props) => (props.isActive ? '0 0 10px #1caeae' : 'none')};
  margin: 0.25em 0;
  text-align: center;

  &.dB {
    margin-top: 0;
  }
`;

export const DecibelText = styled.p<{
  isActive?: boolean;
}>`
  color: ${(props) => (props.isActive ? '#1caeae' : '#062626')};
  font-size: 0.5em;
  font-weight: bold;
  text-shadow: ${(props) => (props.isActive ? '0 0 10px #1caeae' : 'none')};
  text-align: center;
  margin-bottom: 0.5em;

  &:nth-of-type(7) {
    margin-bottom: 0;
  }
`;

export const DecibelColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 1.5em;
`;