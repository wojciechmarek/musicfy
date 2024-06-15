import styled from '@emotion/styled';

export const AudioTileContainer = styled.div`
  background-color: var(--tile-background-color);
  border-radius: 0.5em;
  padding: 1em;
  color: var(--font-color);
  display: flex;
  justify-content: space-between;
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
  color: var(--font-accent-color);

  span {
    margin-left: 0.5em;
  }
`;

export const AudioTilePlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const PlayIconButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color);
  color: var(--font-accent-color);
  border-radius: 50%;
  width: 3em;
  height: 3em;
  position: relative;

  &:hover {
    background-color: var(--accent-hover-color);
  }

  .icon {
    position: relative;
    left: 0.125em;
  }
`;
