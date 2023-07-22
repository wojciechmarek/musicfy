import { Description, EqButton, Knob, Power, VfdDisplay } from '@musicfy/web/components';
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
import {
  ButtonsContainer,
  EqContainer,
  EqualizerContainer,
  EqualizerContent,
  EqualizerTitle,
} from './equalizer.styled';

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

  const { treble: trebleValue, middle: middleValue, bass: bassValue } =
    useSelector((state: RootState) => state.equalizer.boostTones);

  const { isMuted, level: volumeLevelValue } = useSelector(
    (state: RootState) => state.playback.volume
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
            isEnabled={isEqualizerEnabled && isMicrophoneSourceEnabled}
          />
          <VfdDisplay className="vfd" isEnabled={isEqualizerEnabled} />
        </EqContainer>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
