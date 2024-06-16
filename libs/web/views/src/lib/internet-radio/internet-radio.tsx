import {
  AddAudioTile,
  AudioTile,
  ModalWindow,
  NewStationModal,
  SearchBar,
} from '@musicfy/web/components';
import {
  Content,
  Header,
  RadioContainer,
  RadioContent,
} from './internet-radio.styled';
import { AudioSource } from '@musicfy/web/utils/models';
import { useNewStation } from './hooks/use-new-station.hook';
import { usePlayback } from './hooks/use-playback.hook';

/* eslint-disable-next-line */
export interface InternetRadioProps {}

export function InternetRadio(props: InternetRadioProps) {
  const { stations, source, isPlaying, trackId, handleOnPlaybackClick } =
    usePlayback();

  const {
    isAddNewStationModalVisible,
    handleOnAddAudioClick,
    handleOnAddNewStationClick,
    handleOnCancelNewStationClick,
    handleOnSearchStationClick,
  } = useNewStation();

  return (
    <RadioContainer>
      <ModalWindow isVisible={isAddNewStationModalVisible}>
        <NewStationModal
          onAddClick={handleOnAddNewStationClick}
          onCancelClick={handleOnCancelNewStationClick}
        />
      </ModalWindow>
      <RadioContent>
        <Header>Internet radio</Header>
        <SearchBar
          buttonLabel="Search"
          inputPlaceholder="Search a radio station"
          onButtonClick={handleOnSearchStationClick}
        ></SearchBar>
        <Content>
          {stations.map((station) => (
            <AudioTile
              id={station.id}
              key={station.id}
              title={station.title}
              description={station.description}
              coverUrl={station.cover}
              isPlaying={
                source === AudioSource.INTERNET_RADIO &&
                trackId === station.id &&
                isPlaying
              }
              onPlayClick={() => handleOnPlaybackClick(station.id)}
            />
          ))}
          <AddAudioTile
            title="Add a new radio station"
            onAddClick={handleOnAddAudioClick}
          />
        </Content>
      </RadioContent>
    </RadioContainer>
  );
}

export default InternetRadio;
