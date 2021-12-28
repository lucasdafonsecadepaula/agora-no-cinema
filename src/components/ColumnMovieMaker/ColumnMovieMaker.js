import React, { useState, useRef, memo } from 'react';
import Card from '../Card/Card';
import { Title, Body, DivButton, Container } from './styles';

function ColumnMovieMaker({ value }) {
  const { title, arrayMovies } = value;
  const widthRef = useRef();
  const defaultMovePx = 230;
  const fixMoveDirection = -1;

  const [animationBtn, setAnimationBtn] = useState({
    statusBtnLeft: false,
    statusBtnRight: true,
  });

  const [animationX, setAnimationX] = useState({
    translatePx: 0,
    multiplier: 0,
  });

  const animation = (e) => {
    const index = animationX.multiplier + e;
    const moveValuePx =
      (e + animationX.multiplier) * defaultMovePx * fixMoveDirection;

    if (
      moveValuePx * fixMoveDirection + widthRef.current.clientWidth >
      widthRef.current.scrollWidth
    ) {
      setAnimationBtn({ ...animationBtn, statusBtnRight: false });
      setAnimationX({
        translatePx: `translateX(${moveValuePx}px)`,
        multiplier: index,
      });
      return;
    }
    setAnimationBtn({ statusBtnLeft: index !== 0, statusBtnRight: true });
    setAnimationX({
      translatePx: `translateX(${moveValuePx}px)`,
      multiplier: index,
    });
  };

  return (
    <>
      <Title>{title}</Title>
      <Body>
        <DivButton animationBtn={animationBtn}>
          <button
            aria-label="."
            onClick={() => animation(-1)}
            className="btn-left"
            type="button"
          />
          <button
            aria-label="."
            onClick={() => animation(1)}
            className="btn-right"
            type="button"
          />
        </DivButton>

        <Container ref={widthRef} animationX={animationX}>
          {arrayMovies.map((e) => (
            <Card key={e.id} value={e} />
          ))}
        </Container>
      </Body>
    </>
  );
}

export default memo(ColumnMovieMaker);
