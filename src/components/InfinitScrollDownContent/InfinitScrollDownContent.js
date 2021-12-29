import React, { useEffect, useState } from 'react';
import { getMoreCollumns } from '../../hooks/getMoreCollumns';
import ColumnMovieMaker from '../ColumnMovieMaker/ColumnMovieMaker';

export default function InfinitScrollDownContent() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          getMoreCollumns({ array, setArray });
        }
      },
      { threshold: 0.9 },
    );
    intersectionObserver.observe(document.querySelector('#lastDivVisible'));
    return () => intersectionObserver.disconnect();
  }, [array]);

  return (
    <>
      {array.map((e) => (
        <ColumnMovieMaker
          key={e.id}
          value={{ arrayMovies: e.arrayMovies, title: e.title }}
        />
      ))}
      <div style={{ height: '50px' }} id="lastDivVisible" />
    </>
  );
}
