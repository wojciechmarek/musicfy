import styled from '@emotion/styled';
import styles from './knob.module.css';

/* eslint-disable-next-line */
export interface KnobProps {
  [key: string]: any;
  name: string;
  leftLabel: string;
  rightLabel: string;
}

const EqKnob = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto 0;
  height: 100%;
  position: relative;
`;

const EqKnobLabel = styled.p`
  color: white;
  font-size: 0.75em;
  font-weight: bold;
  text-transform: uppercase;

  &:nth-of-type(1),
  &:nth-of-type(3) {
    margin: auto 0 2em;
  }

  &:nth-of-type(2) {
    margin-top: 1em;
  }
`;

const EqKnobControl = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: #19181e;
  box-shadow: 0 0 10px #19181e;
  margin: 0.5em auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const EqKnobRevolveControl = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: #272a35;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: move;
`;

const EqKnobRevolvePointer = styled.div`
  width: 0.75em;
  height: 1em;
  background-color: #19181e;
  margin: 0 auto;
  position: relative;
  top: -1px;
`;

export function Knob(props: KnobProps) {
  const { name, leftLabel, rightLabel, ...rest } = props;
  return (
    <EqKnob {...rest}>
      <EqKnobControl>
        <EqKnobRevolveControl
          onMouseDown={(e) => {
            console.log(e);
          }}
          onMouseMove={(e) => {
            console.log(e);
          }}
          onMouseUp={(e) => {
            console.log(e);
          }}
        >
          <EqKnobRevolvePointer />
        </EqKnobRevolveControl>
      </EqKnobControl>
      <EqKnobLabel>{leftLabel}</EqKnobLabel>
      <EqKnobLabel>{name}</EqKnobLabel>
      <EqKnobLabel>{rightLabel}</EqKnobLabel>
    </EqKnob>
  );
}

export default Knob;
