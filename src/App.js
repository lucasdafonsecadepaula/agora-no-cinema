import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/global';
import SearchBox from './components/SearchBox/SearchBox';
import MoviesInTheatres from './components/MoviesInTheatres/MoviesInTheatres';
import CustomModal from './components/CustomModal/CustomModal';
import InfinitScrollDownContent from './components/InfinitScrollDownContent/InfinitScrollDownContent';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <CustomModal />
        <Navbar />
        <SearchBox />
        <MoviesInTheatres />
        <InfinitScrollDownContent />
      </div>
    </>
  );
}
