import styled from '@emotion/styled';
import { Knob, VfdDisplay } from '@musicfy/web/components';
import { Power } from 'lucide-react';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface EqualizerProps {}

const EqualizerContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const EqualizerContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

const EqualizerTitle = styled.h1`
  color: white;
  margin-top: 0.75em;
`;  

const EqContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  width: 100%;
  height: 30em;
  background-color: #272a35;
  border-radius: 0.5em;
  padding: 0.75em;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;

  .volume {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }

  .boost {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .channel {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .vfd {
    grid-column: 5 / 10;
    grid-row: 1 / 3;
  }
`;


const EqPower = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto 0;
`;

const EqPowerButton = styled.button`
  background-color: #19181e;
  color: white;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  width: 3em;
  height: 2em;
  transition: background-color 0.2s ease-in-out;
`;

const EqPowerIndicator= styled.div<{ isActive: boolean }>` 
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: ${({ isActive }) => isActive ? '#4a4feb' : '#1b1c21'};
  box-shadow: 0 0 10px ${({ isActive }) => isActive ? '#4a4feb' : '#1b1c21'};
  margin: 0.5em auto;
`;

const EqPowerLabel = styled.p`
  color: white;
  font-size: 0.75em;
  text-transform: uppercase;
  text-align: center;
`;



export function Equalizer(props: EqualizerProps) {
  const [isEqOn, setIsEqOn] = useState(false);

  const onEqPowerClick = () => {
    setTimeout(() => {
      setIsEqOn(!isEqOn);
    }, 200);
  };

  return (
    <EqualizerContainer>
      <EqualizerContent>
        <EqualizerTitle>Welcome to Equalizer!</EqualizerTitle>
        <EqContainer>
          <EqPower>
            <EqPowerButton onClick={() => onEqPowerClick()}>
              <Power size={16} />
            </EqPowerButton>
            <EqPowerIndicator isActive={isEqOn} />
            <EqPowerLabel>POWER</EqPowerLabel>
          </EqPower>
          <Knob className="volume" name='Volume' leftLabel='MIN' rightLabel='MAX' />
          <Knob className="channel" name='Channel' leftLabel='LEFT' rightLabel='RIGHT' />
          <Knob className="boost" name='Boost' leftLabel='MIN' rightLabel='MAX' />
          <VfdDisplay className="vfd" />
        </EqContainer>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
