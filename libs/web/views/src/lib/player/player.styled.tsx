import styled from "@emotion/styled";

export const PlayerContainer = styled.div`
  height: 5em;
  background-color: #0e0e0e;
  width: 100%;
`;

export const PlayerContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: red;
  display: flex;
`;

export const PlayerMusicInfoAndProgressContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 1.5em;
`;

export const PlayerVolumeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`;

export const VolumeBar = styled.input<{
  isDisabled: boolean;
}>`
  height: 0.25em;
  background-color: red;
  box-shadow: 0 0 10px #2b31df;
  width: 100%;
  margin: 0 1em;
  border-radius: 1em;
  width: 5em;
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.isDisabled ? 0.3 : 1)};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'all')};

  
`;

export const VolumeBarCurrent = styled.div<{
  progress: number;
}>`
  height: 100%;
  background-color: #2b31df;
  width: ${(props) => props.progress}%;
  border-radius: 1em;
  box-shadow: 0 0 10px #2b31df;
  cursor: pointer;
`;