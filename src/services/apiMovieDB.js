import axios from 'axios';

const apiMovieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
  params: { region: 'BR', language: 'pt-BR' },
});

export default apiMovieDB;
