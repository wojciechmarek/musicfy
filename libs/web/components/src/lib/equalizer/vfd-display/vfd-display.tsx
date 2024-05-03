import { VfdSpectrumAnalyzer } from './vfd-spectrum';
import { VfdChannelAnalyzer } from './vfd-channel-analyzer';
import {
  VfdAnalyzersRow,
  VfdControl,
  VfdControlRed,
  VfdControls,
  VfdDisplayContainer,
} from './vfd-display.styled';
import { AudioSource, setBarsMode } from '@musicfy/web/utils/store';
import { BarsMode } from '@musicfy/web/utils/models';

/* eslint-disable-next-line */
export interface VfdDisplayProps {
  [key: string]: any;
  isEnabled: boolean;
  audioSource: AudioSource;
  isMuted: boolean;
  isRepeating: boolean;
  isShuffling: boolean;
  isMicrophoneSource: boolean;
  leftChannel: number;
  rightChannel: number;
  isStereo: boolean;
  isKaraoke: boolean;
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
    isRepeating,
    isShuffling,
    isMicrophoneSource,
    leftChannel,
    rightChannel,
    isStereo,
    isKaraoke,
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
        <VfdControlRed isActive={isEnabled && isMicrophoneSource}>
          MIC
        </VfdControlRed>
      </VfdControls>
      <VfdAnalyzersRow>
        <VfdSpectrumAnalyzer
          frequencies={frequencies}
          isEnabled={isEnabled}
          frequencyBars={frequencyBars}
        />
        <VfdChannelAnalyzer
          left={leftChannel}
          right={rightChannel}
          isEnabled={isEnabled}
          barsMode={barsMode}
        />
      </VfdAnalyzersRow>
      <VfdControls>
        <VfdControl isActive={isEnabled}>Hi-Fi</VfdControl>
        <VfdControl isActive={isEnabled && isStereo}>STEREO</VfdControl>
        <VfdControl isActive={isEnabled && isRepeating}>REPEAT</VfdControl>
        <VfdControl isActive={isEnabled && isShuffling}>SHUFFLE</VfdControl>
        <VfdControl isActive={isEnabled && isMuted}>MUTING</VfdControl>
        <VfdControl isActive={isEnabled && isKaraoke && isMicrophoneSource}>
          KARAOKE
        </VfdControl>
      </VfdControls>
    </VfdDisplayContainer>
  );
}

export default VfdDisplay;
