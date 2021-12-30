import apiMovieDB from '../services/apiMovieDB';

export const getSpecificMonthData = async ({ year, month, day }) => {
  const monthToString = month < 10 ? `0${month.toString()}` : month; // Meses com apenas um dígito não são reconhecidos
  const data = await apiMovieDB
    .get(
      `/discover/movie?primary_release_date.gte=${year}-${monthToString}-01&primary_release_date.lte=${year}-${monthToString}-${day}`,
    )
    .then((res) => res.data.results)
    .catch((err) => err);
  return data;
};
