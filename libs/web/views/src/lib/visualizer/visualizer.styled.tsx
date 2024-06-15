import styled from '@emotion/styled';

export const VisualizerContainer = styled.div`
  background-color: var(--background-color);
  height: 100%;
`;

export const VisualizerContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
  overflow-y: auto;
`;

export const VisualizerTitle = styled.h1`
  color: var(--font-color);
  margin-top: 0.5em;
`;

export const CanvasContainer = styled.div`
  margin-top: 1em;
  width: 100%;
  background-color: var(--equalizer-background-color);
  position: relative;
  height: 30em;
  border-radius: 0.5em;
`;

export const CanvasButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 0.5em;
  padding: 0.75em 0;
  overflow-x: auto;
`;

export const CanvasButton = styled.button<{
  isActive?: boolean;
}>`
  background-color: ${(props) =>
    props.isActive ? 'var(--accent-color)' : 'var(--tile-background-color);'};
  box-shadow: ${(props) => (props.isActive ? '0 0 10px #2b31df' : 'none')};
  color: ${(props) =>
    props.isActive ? 'var(--font-accent-color);' : 'var(--font-color);'};
  padding: 0.5em 1em;
  border-radius: 0.5em;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? 'var(--accent-hover-color)'
        : 'var(--tile-button-hover-color)'};
  }
`;
