import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MoodProps {}

const MoodContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MoodHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1em 0 0.5em;
`;

const MoodContent = styled.div`
  display: flex;
  overflow-y: auto;
  width: 100%;
`;

const MoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1em;
  width: 100%;
  height: 100%;
`;

const MoodElement = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  height: auto;
  height: 9em;
  background-color: var(--tile-background-color);
  cursor: pointer;

  &:hover:nth-of-type(1) {
    background-color: #2736a8;
  }

  &:hover:nth-of-type(2) {
    background-color: #92920a;
  }

  &:hover:nth-of-type(3) {
    background-color: #9e1f1f;
  }

  &:hover:nth-of-type(4) {
    background-color: #167028;
  }
`;

const MoodName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.25rem;
`;

export function Mood(props: MoodProps) {
  return (
    <MoodContainer>
      <MoodHeader>Pick your mood</MoodHeader>
      <MoodContent>
        <MoodGrid>
          {['Sad 😢', 'Happy 😊', 'Angry 😡', 'Chill 😎'].map((mood) => (
            <MoodElement key={mood}>
              <MoodName>{mood}</MoodName>
            </MoodElement>
          ))}
        </MoodGrid>
      </MoodContent>
    </MoodContainer>
  );
}

export default Mood;
