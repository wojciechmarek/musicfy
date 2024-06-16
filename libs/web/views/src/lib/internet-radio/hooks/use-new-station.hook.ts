import { RadioStation } from '@musicfy/web/utils/models';
import { RootState, setNewRadioStation } from '@musicfy/web/utils/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useNewStation = () => {
  const dispatch = useDispatch();

  const { searchEngineUrl } = useSelector((state: RootState) => state.radio);

  const [isAddNewStationModalVisible, setIsAddNewStationModalVisibleIsAdd] =
    useState(false);

  const handleOnSearchStationClick = (phrase: string) => {
    if (!phrase) {
      return;
    }

    window.open(searchEngineUrl + phrase);
    setIsAddNewStationModalVisibleIsAdd(true);
  };

  const handleOnAddAudioClick = () => {
    setIsAddNewStationModalVisibleIsAdd(true);
  };

  const handleOnAddNewStationClick = (station: RadioStation) => {
    console.log(station);
    dispatch(setNewRadioStation(station));
    setIsAddNewStationModalVisibleIsAdd(false);
  };

  const handleOnCancelNewStationClick = () => {
    setIsAddNewStationModalVisibleIsAdd(false);
  };

  return {
    isAddNewStationModalVisible,
    handleOnSearchStationClick,
    handleOnAddAudioClick,
    handleOnAddNewStationClick,
    handleOnCancelNewStationClick,
  };
};
