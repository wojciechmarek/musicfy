import styled from "@emotion/styled";

export const EqualizerContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

export const EqualizerContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

export const EqualizerTitle = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const EqContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  width: 100%;
  height: 30em;
  background-color: #272a35;
  border-radius: 0.5em;
  padding: 0.75em;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;

  .power {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .volume {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
  }

  .vfd {
    grid-column: 5 / span 5;
    grid-row: 1 / span 2;
  }

  .buttons {
    grid-column: 1 / span 3;
    grid-row: 4 / span 1;
  }

  .reset {
    grid-column: 4 / span 1;
    grid-row: 4 / span 1;
  }

  .tones {
    grid-column: 5 / span 3;
    grid-row: 3 / span 1;
  }

  .bass {
    grid-column: 5 / span 1;
    grid-row: 4 / span 1;
  }

  .middle {
    grid-column: 6 / span 1;
    grid-row: 4 / span 1;
  }

  .treble {
    grid-column: 7 / span 1;
    grid-row: 4 / span 1;
  }

  .balance {
    grid-column: 8 / span 1;
    grid-row: 4 / span 1;
  }

  .mic {
    grid-column: 9 / span 1;
    grid-row: 4 / span 1;
  }
`;

