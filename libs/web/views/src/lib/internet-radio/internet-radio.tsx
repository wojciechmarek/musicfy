import styled from '@emotion/styled';
import { RootState, Track, setAudioSource, setIsPlaying, setIsRadio, setIsRepeating, setIsShuffling, setTrack, setUrl } from '@musicfy/web/store';
import { Play } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface InternetRadioProps {}

const RadioContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const RadioContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

const Header = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 1em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Radio = styled.div`
  background-color: #2a2b30;
  border-radius: 0.5em;
  padding: 1em;
  color: white;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const RadioImage = styled.div`
  height: 7em;
  width: 7em;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5em;
  }
`;

const RadioInfo = styled.div`
  flex: 1;
  margin-left: 1em;
`;

const RadioInfoTitle = styled.h3`
  margin: 0;
`;

const RadioInfoDuration = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #a0a0a0;
`;



const RadioPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const PlayIconButton = styled.div` 
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

export function InternetRadio(props: InternetRadioProps) {
  const radioStations = useSelector((state:RootState) => state.radio.stations);
  const dispatch = useDispatch();

  const onPlayClick = (id: number) => {
    const radioToPlay = radioStations.find((radio) => radio.id === id);
    if (radioToPlay) {
      const track: Track = {
        id: radioToPlay.id,
        title: radioToPlay.title,
        artist: radioToPlay.description,
        coverUrl: radioToPlay.cover,
      };

      dispatch(setUrl(radioToPlay.url));
      dispatch(setIsPlaying(true));
      dispatch(setIsRadio(true));
      dispatch(setAudioSource("internet-radio"));
      dispatch(setIsShuffling(false));
      dispatch(setIsRepeating(false));
      dispatch(setTrack(track));
    }
  }

  return (
    <RadioContainer>
      <RadioContent>
        <Header>Internet radio</Header>
        <Content>
          {radioStations.map((station) => (
            <Radio key={station.id}>
              <RadioImage>
                <img src={station.cover} alt="Song Cover" />
              </RadioImage>
              <RadioInfo>
                <RadioInfoTitle>{station.title}</RadioInfoTitle>
                <RadioInfoDuration>{station.description}</RadioInfoDuration>
              </RadioInfo>
              <RadioPlay>
                <PlayIconButton onClick={() => onPlayClick(station.id)}>
                  <Play size={20} className='icon' />
                </PlayIconButton>
              </RadioPlay>
            </Radio>
          ))}
        </Content>
      </RadioContent>
    </RadioContainer>
  );
}

export default InternetRadio;
