import { useEffect, useState } from 'react';
import { EqKnob, EqKnobControl, EqKnobLabel, EqKnobRevolveControl, EqKnobRevolveControlContainer, EqKnobRevolvePointer } from './knob.styled';

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
      const newRotate = Math.round(((value ?? 0) / 100) * 270);
      setDeg(newRotate);
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
