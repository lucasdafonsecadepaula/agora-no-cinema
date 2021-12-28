import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ColumnMovieMaker from './components/ColumnMovieMaker/ColumnMovieMaker';

const titleMaker = ({ year, month }) => {
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return `${monthNames[month - 1]}/${year}`;
};

const fetchData = async ({ year, month, day }) => {
  const monthToString = month < 10 ? `0${month.toString()}` : month;
  const data = await axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/discover/movie?primary_release_date.gte=${year}-${monthToString}-01&primary_release_date.lte=${year}-${monthToString}-${day}&region=BR&sort_by=popularity.desc${process.env.REACT_APP_API_KEY}`,
    )
    .then((res) => res.data.results)
    .catch((err) => err);
  return data;
};

export default function Test4() {
  const [array, setArray] = useState([]);

  const handle = useCallback(async () => {
    const schemaData = {
      id: 0,
      title: '',
      arrayMovies: [],
      lastDayOfLastMonth: 0,
      month: 0,
      year: 0,
    };
    if (array.length === 0) {
      const today = new Date();
      const lastDayOfLastMonthFullString = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      );
      const [year, month, day] = [
        lastDayOfLastMonthFullString.getFullYear(),
        lastDayOfLastMonthFullString.getMonth() + 1,
        lastDayOfLastMonthFullString.getDate(),
      ];
      const arrayMovies = await fetchData({ year, month, day });

      schemaData.id = 0;
      schemaData.title = titleMaker({ year, month });
      schemaData.arrayMovies = arrayMovies;
      schemaData.year = year;
      schemaData.month = month;
      schemaData.day = day;

      setArray((previusValues) => [...previusValues, schemaData]);
      return;
    }

    const lastIndexArray = array.length - 1;
    let [previusYear, previusMonth] = [
      array[lastIndexArray].year,
      array[lastIndexArray].month - 1,
    ];
    if (previusMonth === 0) {
      previusMonth = 12;
      previusYear -= 1;
    }
    const lastDayOfPreviusMonthFullString = new Date(
      previusYear,
      previusMonth,
      0,
    );
    const [year, month, day] = [
      lastDayOfPreviusMonthFullString.getFullYear(),
      lastDayOfPreviusMonthFullString.getMonth() + 1,
      lastDayOfPreviusMonthFullString.getDate(),
    ];
    const arrayMovies = await fetchData({ year, month, day });

    schemaData.id = array[lastIndexArray].id + 1;
    schemaData.title = titleMaker({ year, month });
    schemaData.arrayMovies = arrayMovies;
    schemaData.year = year;
    schemaData.month = month;
    schemaData.day = day;
    setArray((previusValues) => {
      if (previusValues.length > 15) {
        previusValues.shift();
        return [...previusValues, schemaData];
      }
      return [...previusValues, schemaData];
    });
  }, [array]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          handle();
        }
      },
      { threshold: 0.9 },
    );
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, [handle]);

  return (
    <>
      {array.map((e) => (
        <ColumnMovieMaker
          key={e.id}
          value={{ arrayMovies: e.arrayMovies, title: e.title }}
        />
      ))}
      <div style={{ height: '50px' }} id="sentinela" />
    </>
  );
}
