import styled from "@emotion/styled";

export const VisualizerContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

export const VisualizerContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
  overflow-y: auto;
`;


export const VisualizerTitle = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

export const CanvasContainer = styled.div`
  margin-top: 1em;
  height: 400px;
  width: 100%;
  background-color: #2a2b30;
  position: relative;
`;

export const CanvasEffects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;
  overflow-x: auto;
`;

export const EffectTileButton = styled.button`
  background-color: #2a2b30;
  color: white;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  border: none;

  &:hover {
    background-color: #ffffff20;
  }
`;

