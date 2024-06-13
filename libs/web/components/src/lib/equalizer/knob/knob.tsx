import { useEffect, useState } from 'react';
import {
  EqKnob,
  EqKnobControl,
  EqKnobLabel,
  EqKnobRevolveControl,
  EqKnobRevolveControlContainer,
  EqKnobRevolvePointer,
} from './knob.styled';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface KnobProps {
  [key: string]: any;
  name: string;
  leftLabel: string;
  rightLabel: string;
  isEnabled?: boolean;
  isSmall?: boolean;
  value?: number;
  isInfinite?: boolean;
  isIndicatorsVisible?: boolean;
  onChange?: (value: number) => void;
}

const EqDot = styled.div<{ isActive?: boolean }>`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#9c341a' : '#19181e')};
  box-shadow: 0 0 10px ${(props) => (props.isActive ? '#9c341a' : '#19181e')};
  position: absolute;
`;

const EgDotContainer = styled.div<{ rotate: number }>`
  width: 85.5%;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotate}deg);
`;

export function Knob(props: KnobProps) {
  const {
    isEnabled,
    name,
    leftLabel,
    rightLabel,
    value,
    isIndicatorsVisible,
    onChange,
    ...rest
  } = props;
  const [deg, setDeg] = useState(0);

  const handleOnWheelChange = (e: React.WheelEvent<HTMLDivElement>) => {
    const { deltaY } = e;

    const newRotate = deg + deltaY;

    if (newRotate >= 0 && newRotate <= 270) {
      setDeg(newRotate);
    }

    const value = Math.round((newRotate / 270) * 100);
    const valueWithLimitedRange = value > 100 ? 100 : value <= 0 ? 0 : value;

    if (isEnabled) {
      onChange?.(valueWithLimitedRange);
    }
  };

  useEffect(() => {
    const newRotate = Math.round(((value ?? 0) / 100) * 270);
    setDeg(newRotate);
  }, [value]);

  return (
    <EqKnob {...rest}>
      <EqKnobControl>
        <EqKnobRevolveControlContainer>
          <EqKnobRevolveControl
            title="Use mouse wheel to control"
            rotate={deg}
            onWheel={(e) => handleOnWheelChange(e)}
          >
            {!isIndicatorsVisible && (
              <EqKnobRevolvePointer isActive={isEnabled} />
            )}
          </EqKnobRevolveControl>
          {isIndicatorsVisible &&
            Array.from({ length: 10 }, (_, index) => (
              <EgDotContainer key={index} rotate={index * 30 + 45}>
                <EqDot isActive={isEnabled && index * 30 <= deg} />
              </EgDotContainer>
            ))}
        </EqKnobRevolveControlContainer>
      </EqKnobControl>
      <EqKnobLabel>{leftLabel}</EqKnobLabel>
      <EqKnobLabel>{name}</EqKnobLabel>
      <EqKnobLabel>{rightLabel}</EqKnobLabel>
    </EqKnob>
  );
}

export default Knob;
