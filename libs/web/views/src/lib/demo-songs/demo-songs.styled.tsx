import styled from '@emotion/styled';

export const DemoContainer = styled.div`
  background-color: var(--background-color);
  height: 100%;
`;

export const DemoContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
  overflow-y: auto;
`;

export const Header = styled.h1`
  color: var(--font-color);
  margin-top: 0.5em;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 1em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Song = styled.div`
  background-color: #2a2b30;
  border-radius: 0.5em;
  padding: 1em;
  color: var(--font-color);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const SongImage = styled.div`
  height: 7em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }
`;

export const SongInfo = styled.div`
  flex: 1;
  margin-left: 1em;
`;

export const SongInfoTitle = styled.h3`
  margin: 0;
`;

export const SongInfoDescription = styled.p`
  margin: 0;
`;

export const SongInfoDuration = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #a0a0a0;
`;

export const SongPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const PlayIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color);
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
