import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/utility/store';
import { useAudioProcessor } from './use-audio-processor.hook';

export function AudioProcessor() {
  const { seekToTime, isPlaying, url } = useSelector(
    (state: RootState) => state.playback.audio
  );
  const { isMicrophoneSource, balance, isStereo, isKaraoke } = useSelector(
    (state: RootState) => state.equalizer
  );
  const { level, isMuted } = useSelector(
    (state: RootState) => state.playback.volume
  );

  const {
    setPlaybackStateToPlay,
    setVolume,
    setMuted,
    setNewAudioUrlAndStartPlay,
    setMicrophoneSource,
    setBalance,
    setStereo,
    setKaraoke,
    setSeekToTime,
  } = useAudioProcessor();

  // PLAY/PAUSE
  useEffect(() => {
    setPlaybackStateToPlay(isPlaying);
  }, [isPlaying, setPlaybackStateToPlay]);

  // SEEK TO TIME
  useEffect(() => {
    setSeekToTime(seekToTime);
  }, [seekToTime, setSeekToTime]);

  // VOLUME
  useEffect(() => {
    setVolume(level);
  }, [level, setVolume]);

  // MUTE
  useEffect(() => {
    setMuted(isMuted);
  }, [isMuted, setMuted]);

  // URL
  useEffect(() => {
    setNewAudioUrlAndStartPlay(url);
  }, [url, setNewAudioUrlAndStartPlay]);

  // MICROPHONE
  useEffect(() => {
    setMicrophoneSource(isMicrophoneSource);
  }, [isMicrophoneSource, setMicrophoneSource]);

  // BALANCE
  useEffect(() => {
    setBalance(balance);
  }, [balance, setBalance]);

  // STEREO
  useEffect(() => {
    setStereo(isStereo);
  }, [isStereo, setStereo]);

  // KARAOKE
  useEffect(() => {
    setKaraoke(isKaraoke);
  }, [isKaraoke, setKaraoke]);

  return null;
};