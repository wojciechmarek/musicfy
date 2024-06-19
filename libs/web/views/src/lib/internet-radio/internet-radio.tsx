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
  RadioAddStation,
  RadioContainer,
  RadioContent,
} from './internet-radio.styled';
import { AudioSource } from '@musicfy/web/utils/models';
import { useNewStation } from './hooks/use-new-station.hook';
import { usePlayback } from './hooks/use-playback.hook';
import { useIsFavorite } from './hooks/use-is-favorite.hook';

/* eslint-disable-next-line */
export interface InternetRadioProps {}

export function InternetRadio(props: InternetRadioProps) {
  const { stations, source, isPlaying, trackId, handleOnPlaybackClick } =
    usePlayback();

  const { likedStationIds, handleOnHeartClick } = useIsFavorite();

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
        <RadioAddStation>
          <AddAudioTile
            title="Add a new radio station"
            onAddClick={handleOnAddAudioClick}
          />
        </RadioAddStation>
        <Content>
          {stations.map((station) => (
            <AudioTile
              key={station.id}
              title={station.title}
              description={station.description}
              coverUrl={station.cover}
              isLiked={likedStationIds.includes(station.id)}
              isPlaying={
                source === AudioSource.INTERNET_RADIO &&
                trackId === station.id &&
                isPlaying
              }
              onHeartClick={() => handleOnHeartClick(station.id)}
              onPlayClick={() => handleOnPlaybackClick(station.id)}
            />
          ))}
        </Content>
      </RadioContent>
    </RadioContainer>
  );
}

export default InternetRadio;
