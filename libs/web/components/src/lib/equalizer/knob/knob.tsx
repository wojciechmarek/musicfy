import styled from '@emotion/styled';
import styles from './knob.module.css';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface KnobProps {
  [key: string]: any;
  name: string;
  leftLabel: string;
  rightLabel: string;
  isEnabled?: boolean;
  isSmall?: boolean;
  value?: number;
  onChange?: (value: number) => void;
}

const EqKnob = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto 0;
  height: 100%;
  position: relative;
`;

const EqKnobLabel = styled.p<{
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

const EqKnobControl = styled.div`
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

const EqKnobRevolveControlContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-135deg);
`;

const EqKnobRevolveControl = styled.div<{
  rotate: number;
}>`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: #272a35;
  
  cursor: ns-resize;
  transform: rotate(${(props) => props.rotate}deg);
`;

const EqKnobRevolvePointer = styled.div<{
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

export function Knob(props: KnobProps) {
  const { isEnabled, name, leftLabel, rightLabel, value, onChange, ...rest } = props;
  const [deg, setDeg] = useState(0);


  const handleOnWheelChange = (e: React.WheelEvent<HTMLDivElement>) => {
    const { deltaY } = e;

    const newRotate = deg + deltaY;

    if (newRotate >= 0 && newRotate <= 270) {
      setDeg(newRotate);
    }

    const value = Math.round((newRotate / 270) * 100);
    const valueWithLimitedRange = value > 100 ? 100 : value <= 0 ? 0 : value;
    onChange?.(valueWithLimitedRange);
  };

  useEffect(() => {
    if (value) {
      const newRotate = Math.round((value / 100) * 270);
      setDeg(newRotate);
    }
  }, [value]);

  return (
    <EqKnob {...rest}>
      <EqKnobControl>
        <EqKnobRevolveControlContainer>
          <EqKnobRevolveControl
            title='Use mouse wheel to control'
            rotate={deg}
            onWheel={(e) => handleOnWheelChange(e)}
          >
            <EqKnobRevolvePointer isActive={isEnabled} />
          </EqKnobRevolveControl>
        </EqKnobRevolveControlContainer>
      </EqKnobControl>
      <EqKnobLabel>{leftLabel}</EqKnobLabel>
      <EqKnobLabel>{name}</EqKnobLabel>
      <EqKnobLabel>{rightLabel}</EqKnobLabel>
    </EqKnob>
  );
}

export default Knob;
