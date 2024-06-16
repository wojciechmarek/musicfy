import {
  VfdAnalyzersRow,
  VfdControl,
  VfdControlRed,
  VfdControls,
  VfdDisplayContainer,
} from './vfd-display.styled';
import { AudioSource } from '@musicfy/web/utils/models';
import { BarsMode } from '@musicfy/web/utils/models';
import { VfdChannelAnalyzer, VfdSpectrumAnalyzer } from './components';

/* eslint-disable-next-line */
export interface VfdDisplayProps {
  [key: string]: any;
  isEnabled: boolean;
  audioSource: AudioSource;
  isMuted: boolean;
  isRepeatEnabled: boolean;
  isShuffleEnabled: boolean;
  isMicrophoneEnabled: boolean;
  leftChannel: number;
  rightChannel: number;
  isStereoEnabled: boolean;
  isKaraokeEnabled: boolean;
  frequencies: number[];
  barsMode: BarsMode;
  frequencyBars: {
    label: string;
    frequencyId: number;
  }[];
}

export function VfdDisplay(props: VfdDisplayProps) {
  const {
    isEnabled,
    audioSource,
    isMuted,
    isRepeatEnabled,
    isShuffleEnabled,
    isMicrophoneEnabled,
    leftChannel,
    rightChannel,
    isStereoEnabled,
    isKaraokeEnabled,
    frequencies,
    frequencyBars,
    barsMode,
    ...rest
  } = props;

  return (
    <VfdDisplayContainer {...rest}>
      <VfdControls>
        <VfdControl isActive={isEnabled && audioSource === AudioSource.DEMO}>
          TAPE
        </VfdControl>
        <VfdControl
          isActive={isEnabled && audioSource === AudioSource.INTERNET_RADIO}
        >
          TUNER
        </VfdControl>
        <VfdControl isActive={isEnabled && audioSource === AudioSource.SPOTIFY}>
          AUX
        </VfdControl>
        <VfdControlRed isActive={isEnabled && isMicrophoneEnabled}>
          MIC
        </VfdControlRed>
      </VfdControls>
      <VfdAnalyzersRow>
        <VfdSpectrumAnalyzer
          frequencies={frequencies}
          isEnabled={isEnabled && barsMode !== 'off'}
          frequencyBars={frequencyBars}
          barsMode={barsMode}
        />
        <VfdChannelAnalyzer
          left={leftChannel}
          right={rightChannel}
          isEnabled={isEnabled && barsMode !== 'off'}
          barsMode={barsMode}
        />
      </VfdAnalyzersRow>
      <VfdControls>
        <VfdControl isActive={isEnabled}>Hi-Fi</VfdControl>
        <VfdControl isActive={isEnabled && isStereoEnabled}>STEREO</VfdControl>
        <VfdControl isActive={isEnabled && isRepeatEnabled}>REPEAT</VfdControl>
        <VfdControl isActive={isEnabled && isShuffleEnabled}>
          SHUFFLE
        </VfdControl>
        <VfdControl isActive={isEnabled && isMuted}>MUTING</VfdControl>
        <VfdControl
          isActive={isEnabled && isKaraokeEnabled && isMicrophoneEnabled}
        >
          KARAOKE
        </VfdControl>
      </VfdControls>
    </VfdDisplayContainer>
  );
}

export default VfdDisplay;
