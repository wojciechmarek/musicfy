import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/utils/store';
import { useAudioProcessor } from './use-audio-processor.hook';

export function AudioProcessor() {
  const { seekToTime, isPlaying, url } = useSelector(
    (state: RootState) => state.playback.audio,
  );
  const { isMicrophoneEnabled, balance, isStereoEnabled, isKaraokeEnabled, microphoneBoost } =
    useSelector((state: RootState) => state.equalizer);
  const { level, isMuted } = useSelector(
    (state: RootState) => state.playback.volume,
  );
  const { bass, middle, treble } = useSelector(
    (state: RootState) => state.equalizer.boostTones,
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
    setBass,
    setMiddle,
    setTreble,
    setMicrophoneBoost,
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
    setMicrophoneSource(isMicrophoneEnabled);
  }, [isMicrophoneEnabled, setMicrophoneSource]);

  // BALANCE
  useEffect(() => {
    setBalance(balance);
  }, [balance, setBalance]);

  // STEREO
  useEffect(() => {
    setStereo(isStereoEnabled);
  }, [isStereoEnabled, setStereo]);

  // KARAOKE
  useEffect(() => {
    setKaraoke(isKaraokeEnabled);
  }, [isKaraokeEnabled, setKaraoke]);

  // BASS
  useEffect(() => {
    setBass(bass);
  }, [bass, setBass]);

  // MIDDLE
  useEffect(() => {
    setMiddle(middle);
  }, [middle, setMiddle]);

  // TREBLE
  useEffect(() => {
    setTreble(treble);
  }, [treble, setTreble]);

  // MICROPHONE
  useEffect(() => {
    if (!isMicrophoneEnabled) {
      return;
    }
    setMicrophoneBoost(microphoneBoost);
  }, [microphoneBoost, setMicrophoneBoost, isMicrophoneEnabled]);

  return null;
}
