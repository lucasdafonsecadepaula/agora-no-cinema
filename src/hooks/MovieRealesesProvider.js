/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ContextMoveRealeses = createContext({});

export function MovieRealesesProvider({ children }) {
  const [moviesRelasesArray, setMoviesRelasesArray] = useState([]);

  useEffect(() => {
    const date = new Date();
    const [today, month] = [date.getDate(), date.getMonth()];
    let year = date.getFullYear();
    let oneMonthAfter = month + 1;
    if (month === 12) {
      oneMonthAfter = 1;
      year += 1;
    }

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/discover/movie?release_date.gte=${year}-${month}-${today}&release_date.lte=${year}-${oneMonthAfter}-${today}&region=BR&sort_by=popularity.desc${process.env.REACT_APP_API_KEY}`,
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
