import styled from '@emotion/styled';

export const AudioTileContainer = styled.div`
  background-color: #2a2b30;
  border-radius: 0.5em;
  padding: 1em;
  color: white;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const AudioTileImage = styled.div`
  height: 7em;
  width: 7em;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5em;
  }
`;

export const AudioTileInfo = styled.div`
  flex: 1;
  margin-left: 1em;
  display: flex;
  flex-direction: column;
`;

export const AudioTileInfoTitle = styled.h3`
  margin: 0;
`;

export const AudioTileInfoDuration = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #a0a0a0;
`;

export const AudioTileInfoSpacer = styled.div`
  flex: 1;
`;

export const AudioTileInfoPlaying = styled.p`
  margin: 0;
  font-size: 0.75em;
  background-color: #df582b;
  padding: 0.35em 0.5em 0.25em;
  border-radius: 0.5em;
  font-weight: bold;
  width: fit-content;

  span {
    margin-left: 0.5em;
  }
`;

export const AudioTilePlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const PlayIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b31df;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  transition: background-color 0.2s ease-in-out;
  position: relative;

  &:hover {
    background-color: #4a4feb;
  }

  .icon {
    position: relative;
    left: 0.125em;
  }
`;
