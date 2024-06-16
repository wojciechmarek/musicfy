import React from 'react';
import {
  FavoriteContainer,
  FavoriteContent,
  FavoriteTitle,
} from './favorite.styled';
import { ResultList } from '@musicfy/web/components';

/* eslint-disable-next-line */
type Props = {};

export const Favorite = (props: Props) => {
  const songs = ['AB', 'CS', 'WE'].map((item) => ({
    header: 'Song ' + item,
    description: 'Description of ' + item,
    imageUrl: `https://api.dicebear.com/9.x/initials/svg?seed=${item}`,
  }));

  return (
    <FavoriteContainer>
      <FavoriteContent>
        <FavoriteTitle>Favorite</FavoriteTitle>
        <ResultList title="Tracks" items={[...songs]} />
        <ResultList title="Radio stations" items={[...songs]} />
        <ResultList title="Spotify" items={[...songs]} />
      </FavoriteContent>
    </FavoriteContainer>
  );
};
