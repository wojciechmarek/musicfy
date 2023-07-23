import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/store';
import { VfdSpectrumAnalyzer } from './vfd-spectrum';
import { VfdChannelAnalyzer } from './vfd-channel-analyzer';
import {
  VfdAnalyzersRow,
  VfdControl,
  VfdControlRed,
  VfdControls,
  VfdDisplayContainer,
} from './vfd-display.styled';

/* eslint-disable-next-line */
export interface VfdDisplayProps {
  [key: string]: any;
  isEnabled: boolean;
}

const frequenciesHeaders = [
  '32',
  '64',
  '128',
  '256',
  '512',
  '1k',
  '2k',
  '4k',
  '8k',
  '12k',
  '16k',
];

export function VfdDisplay(props: VfdDisplayProps) {
  const { isEnabled, ...rest } = props;

  const { source } = useSelector((state: RootState) => state.playback.audio);

  const { isMuted, level } = useSelector(
    (state: RootState) => state.playback.volume
  );

  const { isRepeating, isShuffling } = useSelector(
    (state: RootState) => state.playback.mode
  );

  const { isKaraoke, isMicrophoneSource, isStereo } = useSelector(
    (state: RootState) => state.equalizer
  );
  const { frequencies } = useSelector(
    (state: RootState) => state.playback.analysis
  );


  return (
    <VfdDisplayContainer {...rest}>
      <VfdControls>
        <VfdControl isActive={isEnabled && source === 'demo'}>
          TAPE/CD
        </VfdControl>
        <VfdControl isActive={isEnabled && source === 'internet-radio'}>
          TUNER
        </VfdControl>
        <VfdControl isActive={isEnabled && source === 'spotify'}>
          AUX
        </VfdControl>
        <VfdControlRed isActive={isEnabled && isMicrophoneSource}>
          MIC
        </VfdControlRed>
      </VfdControls>
      <VfdAnalyzersRow>
        <VfdSpectrumAnalyzer
          isEnabled={isEnabled}
          headers={frequenciesHeaders}
          values={frequencies}
        />
        <VfdChannelAnalyzer
          left={isMuted ? 0 : level}
          right={isMuted ? 0 : level}
          isEnabled={isEnabled}
        />
      </VfdAnalyzersRow>
      <VfdControls>
        <VfdControl isActive={isEnabled}>Hi-Fi</VfdControl>
        <VfdControl isActive={isEnabled && isStereo}>STEREO</VfdControl>
        <VfdControl isActive={isEnabled && isRepeating}>REPEAT</VfdControl>
        <VfdControl isActive={isEnabled && isShuffling}>SHUFFLE</VfdControl>
        <VfdControl isActive={isEnabled && isMuted}>MUTING</VfdControl>
        <VfdControl isActive={isEnabled && isKaraoke}>KARAOKE</VfdControl>
      </VfdControls>
    </VfdDisplayContainer>
  );
}

export default VfdDisplay;
