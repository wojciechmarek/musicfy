import styled from '@emotion/styled';
import styles from './knob.module.css';
import { Power as PowerIcon } from 'lucide-react';

/* eslint-disable-next-line */
export interface PowerProps {
  [key: string]: any;
  isActive: boolean;
  handleOnPowerClick: () => void;
}

const EqPower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto 0;
`;

const EqPowerButton = styled.button`
  background-color: #19181e;
  color: var(--font-accent-color);
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  width: 3em;
  height: 2em;
  transition: background-color 0.2s ease-in-out;
`;

const EqPowerIndicator = styled.div<{ isActive: boolean }>`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#ce4206' : '#1b1c21')};
  box-shadow: 0 0 10px ${({ isActive }) => (isActive ? '#ce4206' : '#1b1c21')};
  margin: 0.5em auto;
`;

const EqPowerLabel = styled.p`
  color: var(--font-accent-color);
  font-size: 0.75em;
  text-transform: uppercase;
  text-align: center;
`;

export function Power(props: PowerProps) {
  const { handleOnPowerClick, isActive, ...rest } = props;
  return (
    <EqPower {...rest}>
      <EqPowerButton onClick={() => handleOnPowerClick()}>
        <PowerIcon size={16} />
      </EqPowerButton>
      <EqPowerIndicator isActive={isActive} />
      <EqPowerLabel>POWER</EqPowerLabel>
    </EqPower>
  );
}

export default Power;
