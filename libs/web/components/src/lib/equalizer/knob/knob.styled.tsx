import styled from "@emotion/styled";

export const EqKnob = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto 0;
  height: 100%;
  position: relative;
`;

export const EqKnobLabel = styled.p<{
  isLarge?: boolean;
}>`
  color: white;
  font-size: 0.75em;
  font-weight: bold;
  text-transform: uppercase;

  &:nth-of-type(1),
  &:nth-of-type(3) {
    margin: ${(props) => (props.isLarge ? '0.5em 0' : 'auto 0 1.25em')};
  }

  &:nth-of-type(2) {
    margin-top: ${(props) => (props.isLarge ? '0.5em' : '0.25em')};
  }

`;

export const EqKnobControl = styled.div`
  width: 70%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #19181e;
  box-shadow: 0 0 10px #19181e;
  margin: 0.5em auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EqKnobRevolveControlContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-135deg);
`;

export const EqKnobRevolveControl = styled.div<{
  rotate: number;
}>`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: #272a35;
  
  cursor: ns-resize;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const EqKnobRevolvePointer = styled.div<{
  isActive?: boolean;
}>`
  width: 0.25em;
  height: 1em;
  background-color: ${(props) => (props.isActive ? '#ce4206' : '#19181e')};
  box-shadow: ${(props) => (props.isActive ? '0 0 10px #ce4206' : 'none')};
  margin: 0 auto;
  border-radius: 0.25em;
  position: relative;
  top: -1px;
`;

