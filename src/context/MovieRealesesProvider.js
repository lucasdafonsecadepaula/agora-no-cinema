/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ContextMoveRealeses = createContext({});

export function MovieRealesesProvider({ children }) {
  const [moviesRelasesArray, setMoviesRelasesArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/movie/now_playing?region=BR${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        setMoviesRelasesArray(res.data.results);
      });
  }, []);

  return (
    <ContextMoveRealeses.Provider value={{ moviesRelasesArray }}>
      {children}
    </ContextMoveRealeses.Provider>
  );
}
