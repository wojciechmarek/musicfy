import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/store';
import { VfdSpectrumAnalyzer } from './vfd-spectrum';
import { VfdChannelAnalyzer } from './vfd-channel-analyzer';

/* eslint-disable-next-line */
export interface VfdDisplayProps {
  [key: string]: any;
  isEnabled: boolean;
}

const VfdDisplayContainer = styled.div`
  background-color: #0b0b0e;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
`;

const VfdAnalyzersRow = styled.div`
  padding: 1.25em 1.25em 0.5em;
  display: flex;
  flex: 1;
  gap: 2em;
  align-items: center;
`;

const VfdControls = styled.div`
  display: flex;
  gap: 1em;
  padding: 0.5em 1.25em 1.25em;
`;

const VfdControl = styled.p<{
  isActive: boolean;
}>`
  color: ${(props) => (props.isActive ? '#1caeae;' : '#062626')};
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: ${(props) => (props.isActive ? '0 0 10px #1caeae' : 'none')};
`;

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

  const { isMuted, level } = useSelector(
    (state: RootState) => state.playback.volume
  );
  const { isRepeating, isShuffling } = useSelector(
    (state: RootState) => state.playback.mode
  );

  const { frequencies } = useSelector((state: RootState) => state.equalizer);

  return (
    <VfdDisplayContainer {...rest}>
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
        <VfdControl isActive={isEnabled}>STEREO</VfdControl>
        <VfdControl isActive={isEnabled && isRepeating}>REPEAT</VfdControl>
        <VfdControl isActive={isEnabled && isShuffling}>SHUFFLE</VfdControl>
        <VfdControl isActive={isEnabled && isMuted}>MUTED</VfdControl>
      </VfdControls>
    </VfdDisplayContainer>
  );
}

export default VfdDisplay;
