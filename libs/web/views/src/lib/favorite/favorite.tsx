import React from 'react';
import {
  FavoriteContainer,
  FavoriteContent,
  FavoriteTitle,
} from './favorite.styled';
import { ResultList } from '@musicfy/web/components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setFavoriteStations } from '@musicfy/web/utils/store';

/* eslint-disable-next-line */
type Props = {};

export const Favorite = (props: Props) => {
  const dispatch = useDispatch();

  const { tracks, stations, spotify } = useSelector(
    (state: RootState) => state.favorites,
  );

  const handleOnHeartClick = (id: number) => {
    const likedStationsIds = stations.map((station) => station.id);
    const isCurrentlyLiked = likedStationsIds.includes(id);
    if (isCurrentlyLiked) {
      const updatedLikedStations = stations.filter(
        (likedStation) => likedStation.id !== id,
      );
      dispatch(setFavoriteStations([...updatedLikedStations]));
    }
  };

  return (
    <FavoriteContainer>
      <FavoriteContent>
        <FavoriteTitle>Favorite</FavoriteTitle>
        <ResultList
          title="Radio stations"
          items={stations.map((item) => ({
            header: item.title,
            description: item.description,
            imageUrl: item.imageUrl,
            isLiked: true,
            isPlaying: false,
            onHeartClick: () => handleOnHeartClick(item.id),
            onPlaybackClick: () => console.log(),
          }))}
        />
        <ResultList
          title="Spotify tracks"
          items={spotify.map((item) => ({
            header: item.title,
            description: item.description,
            imageUrl: item.imageUrl,
            isLiked: false,
            isPlaying: false,
            onHeartClick: () => console.log(),
            onPlaybackClick: () => console.log(),
          }))}
        />
        <ResultList
          title="Demo tracks"
          items={tracks.map((item) => ({
            header: item.title,
            description: item.description,
            imageUrl: item.imageUrl,
            isLiked: false,
            isPlaying: false,
            onHeartClick: () => console.log(),
            onPlaybackClick: () => console.log(),
          }))}
        />
      </FavoriteContent>
    </FavoriteContainer>
  );
};
