import styled from "@emotion/styled";

export const VfdDisplayContainer = styled.div`
  background-color: #0b0b0e;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
`;

export const VfdAnalyzersRow = styled.div`
  padding: 0 1.25em;
  display: flex;
  flex: 1;
  gap: 2em;
  align-items: center;
`;

export const VfdControls = styled.div`
  display: flex;
  gap: 1em;
  padding: 0.25em 1.25em;
`;

export const VfdControl = styled.p<{
  isActive: boolean;
}>`
  color: ${(props) => (props.isActive ? '#1caeae;' : '#062626')};
  font-size: 1em;
  font-weight: bold;
  text-shadow: ${(props) => (props.isActive ? '0 0 10px #1caeae' : 'none')};
`;

export const VfdControlRed = styled.p<{
  isActive: boolean;
}>`
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => (props.isActive ? '#9c341a' : '#250c06')};
  text-shadow: 0 0 10px ${(props) => (props.isActive ? '#9c341a ' : 'none')};
`;

