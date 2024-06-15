import {
  Description,
  EqButton,
  Knob,
  Power,
  VfdDisplay,
} from '@musicfy/web/components';

import {
  RootState,
  setBalance,
  setBarsMode,
  setBassBooster,
  setIsEnabled as setIsEqualizerEnabled,
  setisKaraokeEnabled,
  setisMicrophoneEnabled,
  setIsMuted,
  setisStereoEnabled,
  setMicrophoneBooster,
  setMiddleBooster,
  setTrebleBooster,
  setVolume,
} from '@musicfy/web/utils/store';

import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonsContainer,
  EqContainer,
  EqualizerContainer,
  EqualizerContent,
  EqualizerTitle,
} from './equalizer.styled';
import { vfdFrequencyBars } from '@musicfy/web/utils/constants';

/* eslint-disable-next-line */
export interface EqualizerProps {}

export function Equalizer(props: EqualizerProps) {
  const {
    isEnabled: isEqualizerEnabled,
    isStereoEnabled: isStereoEnabledEnabled,
    isMicrophoneEnabled: isMicrophoneEnabledEnabled,
    isKaraokeEnabled: isKaraokeEnabledEnabled,
    balance: channelBalanceValue,
    barsMode: barsModeValue,
  } = useSelector((state: RootState) => state.equalizer);

  const { source } = useSelector((state: RootState) => state.playback.audio);

  const {
    treble: trebleValue,
    middle: middleValue,
    bass: bassValue,
  } = useSelector((state: RootState) => state.equalizer.boostTones);

  const { isMuted, level: volumeLevelValue } = useSelector(
    (state: RootState) => state.playback.volume,
  );

  const { isRepeatEnabled, isShuffleEnabled } = useSelector(
    (state: RootState) => state.playback.mode,
  );

  const {
    isKaraokeEnabled,
    isMicrophoneEnabled,
    isStereoEnabled,
    microphoneBoost,
  } = useSelector((state: RootState) => state.equalizer);

  const { leftChannel, rightChannel, frequencies } = useSelector(
    (state: RootState) => state.playback.analysis,
  );

  const dispatch = useDispatch();

  const onEqPowerClick = () => {
    setTimeout(() => {
      dispatch(setIsEqualizerEnabled(!isEqualizerEnabled));
    }, 200);
  };

  const onEqStereoClick = () => {
    dispatch(setisStereoEnabled(!isStereoEnabledEnabled));
  };

  const onEqMuteClick = () => {
    dispatch(setIsMuted(!isMuted));
  };

  const onEqKaraokeClick = () => {
    if (isMicrophoneEnabledEnabled)
      dispatch(setisKaraokeEnabled(!isKaraokeEnabledEnabled));
  };

  const onEqMicrophoneClick = () => {
    if (!isMicrophoneEnabledEnabled) {
      dispatch(setisKaraokeEnabled(true));
      dispatch(setMicrophoneBooster(10));
      dispatch(setisMicrophoneEnabled(true));
    } else {
      dispatch(setMicrophoneBooster(0));
      dispatch(setisMicrophoneEnabled(false));
    }
  };

  const onEqResetClick = () => {
    dispatch(setTrebleBooster(0));
    dispatch(setMiddleBooster(0));
    dispatch(setBassBooster(0));
    dispatch(setBalance(50));
    dispatch(setBarsMode('bars'));
  };

  const onEqBarsModeClick = () => {
    switch (barsModeValue) {
      case 'bars':
        dispatch(setBarsMode('pointer'));
        break;

      case 'pointer':
        dispatch(setBarsMode('off'));
        break;

      case 'off':
        dispatch(setBarsMode('bars'));
        break;
    }
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
        <EqualizerTitle>Equalizer</EqualizerTitle>
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
            title="Resets knobs and display"
            className="reset"
            label="Reset"
            handleOnClick={onEqResetClick}
          />
          <EqButton
            className="bars-mode"
            label="BARS MODE"
            handleOnClick={onEqBarsModeClick}
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
            isEnabled={isEqualizerEnabled && isMicrophoneEnabledEnabled}
          />
          <VfdDisplay
            className="vfd"
            isEnabled={isEqualizerEnabled}
            audioSource={source}
            isMuted={isMuted}
            isRepeatEnabled={isRepeatEnabled}
            isShuffleEnabled={isShuffleEnabled}
            isMicrophoneEnabled={isMicrophoneEnabled}
            leftChannel={leftChannel}
            rightChannel={rightChannel}
            isStereoEnabled={isStereoEnabled}
            isKaraokeEnabled={isKaraokeEnabled}
            frequencies={frequencies}
            frequencyBars={vfdFrequencyBars}
            barsMode={barsModeValue}
          />
        </EqContainer>
      </EqualizerContent>
    </EqualizerContainer>
  );
}

export default Equalizer;
