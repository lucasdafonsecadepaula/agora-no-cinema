import React, { useRef, useState } from 'react';
import apiMovieDB from '../../services/apiMovieDB';
import ColumnMovieMaker from '../ColumnMovieMaker/ColumnMovieMaker';
import { Container } from './styles';

export default function SearchBox() {
  const searchRef = useRef();
  const title = 'Resultados';
  const [arraySearchedMovies, setArraySearchedMovies] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    apiMovieDB.get(`/search/movie?query=${searchValue}`).then((res) => {
      setArraySearchedMovies(res.data.results);
    });
    searchRef.current.value = '';
  };

  return (
    <>
      <Container>
        <form className="form-container">
          <label className="form-body" htmlFor="search">
            <input
              ref={searchRef}
              className="form-input"
              placeholder="Procurar Filmes"
              type="text"
              id="search"
            />

            <p className="form-label">Procurar Filmes</p>

            <button
              onClick={(e) => handleSubmit(e)}
              className="btn-submit"
              type="submit"
            >
              <img alt="Search" src="/search.png" />
            </button>
          </label>
        </form>
      </Container>
      {arraySearchedMovies && (
        <ColumnMovieMaker value={{ title, arrayMovies: arraySearchedMovies }} />
      )}
    </>
  );
}
