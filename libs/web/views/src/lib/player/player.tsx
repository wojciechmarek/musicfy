import styled from '@emotion/styled';
import { Rewind, Play, Pause, FastForward, Volume1 } from 'lucide-react';

/* eslint-disable-next-line */
export interface PlayerProps {}

const PlayerContainer = styled.div`
  height: 5em;
  background-color: #0e0e0e;
  width: 100%;
`;

const PlayerContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: red;
  display: flex;
`;

const PlayerNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
  gap: 0.5em;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5em;
  padding: 0.5em;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #ffffff40;
  }
`;

const PlayerMusicInfoAndProgress = styled.div`
  display: flex;
  margin: 0 1em;
  flex: 1;
`;

const PlayerVolumeButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5em;
  padding: 0.5em;
  gap: 0.5em;
  cursor: pointer;
  height: fit-content;
  margin: auto 0;

  transition: background-color 0.1s ease-in-out;

&:hover {
  background-color: #ffffff40;
}
`;

const PlayerMusicInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5em;
  gap: 1em;
`;

export const MusicThumbnail = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 0.5em;
  overflow: hidden;
`;

export const MusicThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MusicTitleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;

export const MusicTitle = styled.p`
  color: white;
  font-weight: bold;
  margin: 0;
`;

export const MusicAuthor = styled.p`
  color: white;
  font-size: 0.8em;
  margin: 0;
`;

const PlayerMusicProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 1em;
`;

const MusicCurrentTime = styled.p`
  color: white;
`;

const MusicProgress = styled.div`
  height: 0.25em;
  background-color: #292a34;
  width: 100%;
  flex: 1;
  margin: 0 1em;
  border-radius: 1em;
`;

const MusicProgressCurrent = styled.div`
  height: 100%;
  background-color: #2b31df;
  width: 50%;
  border-radius: 1em;
  box-shadow: 0 0 10px #2b31df;
`;

const MusicTotalTime = styled.p`
  margin: 0 1em;
  color: white;
`;

export function Player(props: PlayerProps) {
  return (
    <PlayerContainer>
      <PlayerContent>
        <PlayerNavigationButtons>
          <NavigationButton>
            <Rewind />
          </NavigationButton>
          <NavigationButton>
            <Play />
          </NavigationButton>
          <NavigationButton>
            <FastForward />
          </NavigationButton>
        </PlayerNavigationButtons>
        <PlayerMusicInfoAndProgress>
          <PlayerVolumeButton>
            <Volume1 />
          </PlayerVolumeButton>
          <PlayerMusicInfo>
            <MusicThumbnail>
              <MusicThumbnailImage src="https://picsum.photos/300/300" alt="music thumbnail" />
            </MusicThumbnail>
            <MusicTitleAuthor>
              <MusicTitle>Make me up</MusicTitle>
              <MusicAuthor>Avicii</MusicAuthor>
            </MusicTitleAuthor>
          </PlayerMusicInfo>
          <PlayerMusicProgress>
            <MusicCurrentTime>00:00</MusicCurrentTime>
            <MusicProgress>
              <MusicProgressCurrent />
            </MusicProgress>
            <MusicTotalTime>00:00</MusicTotalTime>
          </PlayerMusicProgress>
        </PlayerMusicInfoAndProgress>
      </PlayerContent>
    </PlayerContainer>
  );
}

export default Player;
