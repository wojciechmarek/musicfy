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
  border-radius: 0.25em;
  height: auto;
  height: 9em;
  background-color: #2a2b32;



`;

const MoodName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;



export function Mood(props: MoodProps) {
  return (
    <MoodContainer>
      <MoodHeader>Mood</MoodHeader>
      <MoodContent>
        <MoodGrid>
          {[1, 2, 3, 4].map((item, key) => (
            <MoodElement>
              <MoodName>Sad</MoodName>
            </MoodElement>
          ))}
        </MoodGrid>
      </MoodContent>
    </MoodContainer>
  );
}

export default Mood;
