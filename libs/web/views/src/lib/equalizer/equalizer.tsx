import styled from '@emotion/styled';
import { Knob, Power, VfdDisplay } from '@musicfy/web/components';
import { RootState, setIsEnabled as setIsEqualizerEnabled } from '@musicfy/web/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  .power {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

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

export function Equalizer(props: EqualizerProps) {
  const { isEnabled: isEqualizerEnabled } = useSelector((state: RootState) => state.equalizer);

  const dispatch = useDispatch();

  const onEqPowerClick = () => {
    setTimeout(() => {
      dispatch(setIsEqualizerEnabled(!isEqualizerEnabled));
    }, 200);
  };

  return (
    <EqualizerContainer>
      <EqualizerContent>
        <EqualizerTitle>Welcome to Equalizer!</EqualizerTitle>
        <EqContainer>
          <Power
            className="power"
            isActive={isEqualizerEnabled}
            handleOnPowerClick={onEqPowerClick}
          />
          <Knob
            className="volume"
            name="Volume"
            leftLabel="MIN"
            rightLabel="MAX"
            isEnabled={isEqualizerEnabled}
          />
          <Knob
            className="channel is-small"
            name="Channel"
            leftLabel="LEFT"
            rightLabel="RIGHT"
            isEnabled={isEqualizerEnabled}
          />
          <Knob
            className="boost is-small"
            name="Boost"
            leftLabel="MIN"
            rightLabel="MAX"
            isEnabled={isEqualizerEnabled}
          />
          <VfdDisplay className="vfd" isEnabled={isEqualizerEnabled}/>
        </EqContainer>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
