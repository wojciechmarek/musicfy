import { FavoriteItem } from '@musicfy/web/utils/models';
import { RootState, setFavoriteStations } from '@musicfy/web/utils/store';
import { useDispatch, useSelector } from 'react-redux';

export const useIsFavorite = () => {
  const dispatch = useDispatch();

  const radioStations = useSelector((state: RootState) => state.radio.stations);
  const likedStations = useSelector(
    (state: RootState) => state.favorites.stations,
  );

  const likedStationIds = likedStations.map((station) => station.id);

  const handleOnHeartClick = (id: number) => {
    const foundStation = radioStations.find((station) => station.id === id);
    if (!foundStation) {
      return;
    }

    const isCurrentlyLiked = likedStationIds.includes(id);
    if (isCurrentlyLiked) {
      const updatedLikedStations = likedStations.filter(
        (likedStation) => likedStation.id !== id,
      );
      dispatch(setFavoriteStations([...updatedLikedStations]));
      return;
    }

    const newLinkedStation: FavoriteItem = {
      id: foundStation.id,
      description: foundStation.description,
      imageUrl: foundStation.cover,
      title: foundStation.title,
    };
    dispatch(setFavoriteStations([newLinkedStation, ...likedStations]));
  };

  return { likedStationIds, handleOnHeartClick };
};
