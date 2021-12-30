import React, { useEffect, useState } from 'react';
import { getMoreCollumns } from '../../hooks/getMoreCollumns';
import ColumnMovieMaker from '../ColumnMovieMaker/ColumnMovieMaker';

export default function InfinitScrollDownContent() {
  const [columnArrayData, setColumArrayData] = useState([]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          getMoreCollumns({ columnArrayData, setColumArrayData });
        }
      },
      { threshold: 0.9 },
    );
    intersectionObserver.observe(document.querySelector('#lastDivVisible'));
    return () => intersectionObserver.disconnect();
  }, [columnArrayData]);

  return (
    <>
      {columnArrayData.map((e) => (
        <ColumnMovieMaker
          key={e.id}
          value={{ arrayMovies: e.arrayMovies, title: e.title }}
        />
      ))}
      <div style={{ height: '50px' }} id="lastDivVisible" />
    </>
  );
}
