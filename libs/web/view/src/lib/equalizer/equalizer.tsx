import {
  Description,
  EqButton,
  Knob,
  Power,
  VfdDisplay,
} from '@musicfy/web/ui';

import {
  RootState,
  setBalance,
  setBassBooster,
  setIsEnabled as setIsEqualizerEnabled,
  setIsKaraoke,
  setIsMicrophoneSource,
  setIsMuted,
  setIsStereo,
  setMicrophoneBooster,
  setMiddleBooster,
  setTrebleBooster,
  setVolume,
} from '@musicfy/web/utility/store';

import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonsContainer,
  EqContainer,
  EqualizerContainer,
  EqualizerContent,
  EqualizerTitle,
} from './equalizer.styled';

const frequencyBars = [
  {
    label: '32',
    frequencyId: 5,
  },
  {
    label: '64',
    frequencyId: 15,
  },
  {
    label: '128',
    frequencyId: 35,
  },
  {
    label: '256',
    frequencyId: 70,
  },
  {
    label: '512',
    frequencyId: 135,
  },
  {
    label: '1k',
    frequencyId: 165,
  },
  {
    label: '2k',
    frequencyId: 195,
  },
  {
    label: '4k',
    frequencyId: 230,
  },
  {
    label: '6k',
    frequencyId: 275,
  },
  {
    label: '8k',
    frequencyId: 300,
  },
  {
    label: '10k',
    frequencyId: 340,
  },
  {
    label: '12k',
    frequencyId: 370,
  },
  {
    label: '16k',
    frequencyId: 400,
  },
];

/* eslint-disable-next-line */
export interface EqualizerProps {}

export function Equalizer(props: EqualizerProps) {
  const {
    isEnabled: isEqualizerEnabled,
    isStereo: isStereoEnabled,
    isMicrophoneSource: isMicrophoneSourceEnabled,
    isKaraoke: isKaraokeEnabled,
    balance: channelBalanceValue,
  } = useSelector((state: RootState) => state.equalizer);

  const { source } = useSelector((state: RootState) => state.playback.audio);

  const {
    treble: trebleValue,
    middle: middleValue,
    bass: bassValue,
  } = useSelector((state: RootState) => state.equalizer.boostTones);

  const { isMuted, level: volumeLevelValue } = useSelector(
    (state: RootState) => state.playback.volume
  );

  const { isRepeating, isShuffling } = useSelector(
    (state: RootState) => state.playback.mode
  );

  const { isKaraoke, isMicrophoneSource, isStereo, microphoneBoost} = useSelector(
    (state: RootState) => state.equalizer
  );

  const { leftChannel, rightChannel, frequencies } = useSelector(
    (state: RootState) => state.playback.analysis
  );

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
    if (isMicrophoneSourceEnabled)
    dispatch(setIsKaraoke(!isKaraokeEnabled));
  };

  const onEqMicrophoneClick = () => {
    if (!isMicrophoneSourceEnabled) {
      dispatch(setIsKaraoke(true));
      dispatch(setMicrophoneBooster(10));
      dispatch(setIsMicrophoneSource(true));
    } else {
      dispatch(setMicrophoneBooster(0));
      dispatch(setIsMicrophoneSource(false));
    }
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

  const handleMicrophoneChange = (value: number) => {
    dispatch(setMicrophoneBooster(value));
  };

  return (
    <EqualizerContainer>
      <EqualizerContent>
        <EqualizerTitle>EQUALIZER Super Heavy Bass</EqualizerTitle>
        <EqContainer>
          <Power
            className="power"
            isActive={isEqualizerEnabled}
            handleOnPowerClick={onEqPowerClick}
          />
          <Knob
            isInfinitive={true}
            isIndicatorsVisible={true}
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
            <EqButton label="Mic" handleOnClick={onEqMicrophoneClick} />
            <EqButton label="Karaoke" handleOnClick={onEqKaraokeClick} />
          </ButtonsContainer>
          <EqButton
            className="reset"
            label="Reset"
            handleOnClick={onEqResetClick}
          />
          <Description label="TONES" className="tones" />
          <Knob
            className="treble is-small"
            name="Treble"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled}
            onChange={handleTrebleChange}
            value={trebleValue}
          />
          <Knob
            className="middle is-small"
            name="Middle"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled}
            onChange={handleMiddleChange}
            value={middleValue}
          />
          <Knob
            className="bass is-small"
            name="Bass"
            leftLabel="L"
            rightLabel="H"
            isEnabled={isEqualizerEnabled}
            onChange={handleBassChange}
            value={bassValue}
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
            value={microphoneBoost}
            onChange={handleMicrophoneChange}
            isEnabled={isEqualizerEnabled && isMicrophoneSourceEnabled}
          />
          <VfdDisplay
            className="vfd"
            isEnabled={isEqualizerEnabled}
            audioSource={source}
            isMuted={isMuted}
            isRepeating={isRepeating}
            isShuffling={isShuffling}
            isMicrophoneSource={isMicrophoneSource}
            leftChannel={leftChannel}
            rightChannel={rightChannel}
            isStereo={isStereo}
            isKaraoke={isKaraoke}
            frequencies={frequencies}
            frequencyBars={frequencyBars}
            
          />
        </EqContainer>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
