import styled from '@emotion/styled';
import { EqButton, Knob, Power, VfdDisplay } from '@musicfy/web/components';
import {
  RootState,
  setBalance,
  setBassBooster,
  setIsEnabled as setIsEqualizerEnabled,
  setIsKaraoke,
  setIsMicrophoneSource,
  setIsMuted,
  setIsStereo,
  setMiddleBooster,
  setTrebleBooster,
  setVolume,
} from '@musicfy/web/store';
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

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .volume {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
  }

  .vfd {
    grid-column: 5 / span 5;
    grid-row: 1 / span 2;
  }

  .buttons {
    grid-column: 1 / span 3;
    grid-row: 4 / span 1;
  }

  .reset {
    grid-column: 4 / span 1;
    grid-row: 4 / span 1;
  }

  .bass {
    grid-column: 5 / span 1;
    grid-row: 4 / span 1;
  }

  .middle {
    grid-column: 6 / span 1;
    grid-row: 4 / span 1;
  }

  .treble {
    grid-column: 7 / span 1;
    grid-row: 4 / span 1;
  }

  .balance {
    grid-column: 8 / span 1;
    grid-row: 4 / span 1;
  }

  .mic {
    grid-column: 9 / span 1;
    grid-row: 4 / span 1;
  }
`;

export function Equalizer(props: EqualizerProps) {
  const {
    isEnabled: isEqualizerEnabled,
    isStereo: isStereoEnabled,
    isMicrophoneSource: isMicrophoneSourceEnabled,
    isKaraoke: isKaraokeEnabled,
    balance: channelBalanceValue,
  } = useSelector((state: RootState) => state.equalizer);

  const { isMuted, level: volumeLevelValue } = useSelector((state: RootState) => state.playback.volume);
  const { bass, middle, treble } = useSelector((state: RootState) => state.equalizer);

  const dispatch = useDispatch();

  const onEqPowerClick = () => {
    setTimeout(() => {
      dispatch(setIsEqualizerEnabled(!isEqualizerEnabled));
    }, 200);
  };

  const onEqStereoClick = () => {
    dispatch(setIsStereo(!isStereoEnabled));
  };

  const onEqMuteClick = () => {
    dispatch(setIsMuted(!isMuted));
  };

  const onEqKaraokeClick = () => {
    dispatch(setIsKaraoke(!isKaraokeEnabled));
  };

  const onEqMicrophoneClick = () => {
    dispatch(setIsMicrophoneSource(!isMicrophoneSourceEnabled));    
  };

  const onEqResetClick = () => {
    dispatch(setTrebleBooster(0));
    dispatch(setMiddleBooster(0));
    dispatch(setBassBooster(0));
    dispatch(setBalance(50));
  };

  const handleVolumeChange = (value: number) => {
    dispatch(setVolume(value));
  };

  const handleTrebleChange = (value: number) => {
    dispatch(setTrebleBooster(value));
  };

  const handleMiddleChange = (value: number) => {
    dispatch(setMiddleBooster(value));
  };

  const handleBassChange = (value: number) => {
    dispatch(setBassBooster(value));
  };

  const handleBalanceChange = (value: number) => {
    dispatch(setBalance(value));
  };

  return (
    <EqualizerContainer>
      <EqualizerContent>
        <EqualizerTitle>EQUALIZER AVR-X1700H Super Heavy Bass</EqualizerTitle>
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
            value={volumeLevelValue}
            onChange={handleVolumeChange}
          />
          <ButtonsContainer className="buttons">
            <EqButton label="Stereo" handleOnClick={onEqStereoClick} />
            <EqButton label="Mute" handleOnClick={onEqMuteClick} />
            <EqButton label="Karaoke" handleOnClick={onEqKaraokeClick} />
            <EqButton label="Mic" handleOnClick={onEqMicrophoneClick} />
          </ButtonsContainer>
          <EqButton className="reset" label="Reset" handleOnClick={onEqResetClick} />
          <Knob
            className="treble is-small"
            name="Treble"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled}
            onChange={handleTrebleChange}
            value={treble}
          />
          <Knob
            className="middle is-small"
            name="Middle"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled}
            onChange={handleMiddleChange}
            value={middle}
          />
          <Knob
            className="bass is-small"
            name="Bass"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled}
            onChange={handleBassChange}
            value={bass}
          />
          <Knob
            className="balance is-small"
            name="Balance"
            leftLabel="L"
            rightLabel="R"
            isEnabled={isEqualizerEnabled}
            onChange={handleBalanceChange}
            value={channelBalanceValue}
          />
          <Knob
            className="mic is-small"
            name="Microphone"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled && isMicrophoneSourceEnabled}
          />
          <VfdDisplay className="vfd" isEnabled={isEqualizerEnabled} />
        </EqContainer>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
