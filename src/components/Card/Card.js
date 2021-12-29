/* eslint-disable camelcase */
import React, { memo, useContext } from 'react';
import { ContextModal } from '../../context/ModalProvider';
import { Body, VoteAverage } from './styles';

function Card({ value }) {
  // id
  const { title, overview, poster_path, vote_average } = value;
  const { setMovieModal } = useContext(ContextModal);

  return (
    <Body onClick={() => setMovieModal({ isOpen: true, data: value })}>
      <img alt="" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />

      <VoteAverage voteAverage={vote_average} color="green">
        {vote_average}
      </VoteAverage>

      <div className="description">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </Body>
  );
}

export default memo(Card);
