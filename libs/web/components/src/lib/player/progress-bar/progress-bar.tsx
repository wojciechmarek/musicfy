import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ProgressBarProps {
  currentTime: number;
  totalTime: number;
}

const PlayerMusicProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 1em;
`;

const MusicCurrentTime = styled.p`
  color: white;
`;

const MusicProgress = styled.input`
  height: 0.25em;
  width: 100%;
  flex: 1;
  margin: 0 1em;
  box-shadow: 0 0 10px #2b31df;
`;

const MusicTotalTime = styled.p`
  color: white;
`;

export function ProgressBar(props: ProgressBarProps) {
  const { currentTime, totalTime } = props;
  const [timeForm, setTimeForm] = useState("");
  const [progress, setProgress] = useState(0);

  const totalTimeForm = new Date(totalTime * 1000);
  const totalTimeFormated = `${totalTimeForm.getMinutes() < 10 ? "0" + totalTimeForm.getMinutes() : totalTimeForm.getMinutes()}:${
    totalTimeForm.getSeconds() < 10 ? "0" + totalTimeForm.getSeconds() : totalTimeForm.getSeconds()
  }`
  
  useEffect(() => {
    const time = new Date(currentTime * 1000);
    const timeForm = `${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}:${
      time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
    }`
    setTimeForm(timeForm);

    const progress = (currentTime / totalTime) * 100;
    setProgress(progress);
  }, [currentTime, totalTime]);

  return (
    <PlayerMusicProgress>
      <MusicCurrentTime>{timeForm}</MusicCurrentTime>
      <MusicProgress
        type="range"
        min={0}
        max={100}
        value={progress}
      />
      <MusicTotalTime>{totalTimeFormated}</MusicTotalTime>
    </PlayerMusicProgress>
  );
}

export default ProgressBar;
