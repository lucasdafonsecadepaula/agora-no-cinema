/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, createContext } from 'react';
import apiMovieDB from '../services/apiMovieDB';

export const ContextMoveRealeses = createContext({});

export function MovieReleasesProvider({ children }) {
  const [moviesRelasesArray, setMoviesRelasesArray] = useState([]);

  useEffect(() => {
    apiMovieDB
      .get(`/movie/now_playing`)
      .then((res) => {
        setMoviesRelasesArray(res.data.results);
      })
      .catch(() => setMoviesRelasesArray([]));
  }, []);

  return (
    <ContextMoveRealeses.Provider value={{ moviesRelasesArray }}>
      {children}
    </ContextMoveRealeses.Provider>
  );
}
