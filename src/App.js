import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/global';
import SearchBox from './components/SearchBox/SearchBox';
import MoviesInTheatres from './components/MoviesInTheatres/MoviesInTheatres';
import Test4 from './Test4';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Navbar />
        <SearchBox />
        <MoviesInTheatres />
        <Test4 />
      </div>
    </>
  );
}
