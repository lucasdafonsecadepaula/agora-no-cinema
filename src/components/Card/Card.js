/* eslint-disable camelcase */
import React, { memo } from 'react';
import { Body } from './styles';

function Card({ value }) {
  const { title, overview, poster_path, id, vote_average } = value;

  return (
    <Body onClick={() => console.log(id)}>
      <img alt="" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </Body>
  );
}

export default memo(Card);
