import React, { useRef, useState } from 'react';
import axios from 'axios';
import ColumnMovieMaker from '../ColumnMovieMaker/ColumnMovieMaker';
import { Container } from './styles';

export default function SearchBox() {
  const searchRef = useRef();
  const title = 'Resultados';
  const [arrayMovies, setArrayMovies] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/search/movie?query=${searchValue}&region=BR${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        setArrayMovies(res.data.results);
      });
    searchRef.current.value = '';
  };

  return (
    <>
      <Container>
        <form>
          <label htmlFor="search">
            <input
              ref={searchRef}
              className="form_input"
              placeholder="Procurar Filmes"
              type="text"
              id="search"
            />
            <p className="form_label">Procurar Filmes</p>
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
      {arrayMovies && <ColumnMovieMaker value={{ title, arrayMovies }} />}
    </>
  );
}
