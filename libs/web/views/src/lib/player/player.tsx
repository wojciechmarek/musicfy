import { PlayButtons, ProgressBar, SongDetails, VolumeButton } from '@musicfy/web/components';
import { PlayerContainer, PlayerContent, PlayerMusicInfoAndProgressContainer } from './player.styled';

/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
  return (
    <PlayerContainer>
      <PlayerContent>
        <PlayButtons />
        <PlayerMusicInfoAndProgressContainer>
          <VolumeButton />
          <SongDetails />
          <ProgressBar />
        </PlayerMusicInfoAndProgressContainer>
      </PlayerContent>
    </PlayerContainer>
  );
}

export default Player;
