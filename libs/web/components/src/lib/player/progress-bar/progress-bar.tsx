import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ProgressBarProps {}

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
  width: 23%;
  border-radius: 1em;
  box-shadow: 0 0 10px #2b31df;
`;

const MusicTotalTime = styled.p`
  margin: 0 1em;
  color: white;
`;

export function ProgressBar(props: ProgressBarProps) {
  return (
    <PlayerMusicProgress>
      <MusicCurrentTime>01:20</MusicCurrentTime>
      <MusicProgress>
        <MusicProgressCurrent />
      </MusicProgress>
      <MusicTotalTime>04:01</MusicTotalTime>
    </PlayerMusicProgress>
  );
}

export default ProgressBar;
