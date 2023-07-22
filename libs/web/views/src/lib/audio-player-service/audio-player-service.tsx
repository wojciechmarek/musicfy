import { useEffect } from 'react';
import { useAudioPlayerService } from './use-audio-player-service.hook';
import { useSelector } from 'react-redux';
import { RootState } from '@musicfy/web/store';

export function AudioPlayerService() {
  const { seekToTime, isPlaying, url } = useSelector((state: RootState) => state.playback.audio);
  const { isMicrophoneSource, balance, isStereo, isKaraoke } = useSelector((state: RootState) => state.equalizer);
  const { level, isMuted } = useSelector((state: RootState) => state.playback.volume);
  
  const {
    setPlaybackState,
    setVolume,
    setMuted,
    setNewAudioUrl,
    setMicrophoneSource,
    setBalance,
    setStereo,
    setKaraoke,
    setSeekToTime,
  } = useAudioPlayerService();

  // PLAY/PAUSE
  useEffect(() => {
    setPlaybackState(isPlaying);
  }, [isPlaying, setPlaybackState]);

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
    setNewAudioUrl(url);
  }, [url, setNewAudioUrl]);

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
}

export default AudioPlayerService;
