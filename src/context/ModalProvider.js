import React, { useState, createContext, useMemo, useEffect } from 'react';
import apiMovieDB from '../services/apiMovieDB';

export const ContextModal = createContext({});

export function ModalProvider({ children }) {
  const [movieModal, setMovieModal] = useState({
    isOpen: false,
    data: {},
  });
  const [trailerData, setTrailerData] = useState([]);

  useEffect(() => {
    if (movieModal.isOpen) {
      const { id } = movieModal.data;
      const fetchTrailerData = async () => {
        await apiMovieDB
          .get(`/movie/${id}/videos`)
          .then((res) => {
            setTrailerData(res.data.results);
          })
          .catch(() => setTrailerData([]));
      };
      fetchTrailerData();
    }
  }, [movieModal]);

  const ModalControler = useMemo(
    () => ({ movieModal, setMovieModal, trailerData }),
    [movieModal, trailerData],
  );

  return (
    <ContextModal.Provider value={ModalControler}>
      {children}
    </ContextModal.Provider>
  );
}
