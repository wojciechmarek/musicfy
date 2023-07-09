import styled from '@emotion/styled';
import { InputHTMLAttributes, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ProgressBarProps {
  currentTime: number;
  totalTime: number;
  handleProgressBarChange: (value: number) => void;
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
  const { currentTime, totalTime, handleProgressBarChange } = props;
  const [timeForm, setTimeForm] = useState("");

  let totalTimeFormatted = "";
  if (totalTime === -1) {
    totalTimeFormatted = "🔴 LIVE";
  } else {
    const totalTimeForm = new Date(totalTime * 1000);
    totalTimeFormatted = `${totalTimeForm.getMinutes() < 10 ? "0" + totalTimeForm.getMinutes() : totalTimeForm.getMinutes()}:${
      totalTimeForm.getSeconds() < 10 ? "0" + totalTimeForm.getSeconds() : totalTimeForm.getSeconds()
    }`
  }

  const onProgressBarChange = (e: InputHTMLAttributes<HTMLInputElement>) => {
    const progress = Number.parseInt(e.currentTarget.value);
    handleProgressBarChange(progress);
  }
    

  
  useEffect(() => {
    const time = new Date(currentTime * 1000);
    const timeForm = `${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}:${
      time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
    }`
    setTimeForm(timeForm);
  }, [currentTime, totalTime]);

  return (
    <PlayerMusicProgress>
      <MusicCurrentTime>{timeForm}</MusicCurrentTime>
      <MusicProgress
        type="range"
        min={0}
        max={totalTime}
        value={currentTime}
        onChange={onProgressBarChange}
      />
      <MusicTotalTime>{totalTimeFormatted}</MusicTotalTime>
    </PlayerMusicProgress>
  );
}

export default ProgressBar;
