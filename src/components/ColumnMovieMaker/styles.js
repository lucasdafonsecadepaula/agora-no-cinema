import styled, { css } from 'styled-components';

export const Title = styled.h2`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  padding: 5px 20px;
`;

export const Body = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const Container = styled.div`
  ${({ animationX }) =>
    css`
      transform: ${() => animationX.translatePx}; ;
    `};

  display: flex;
  position: relative;
  width: 100%;
  min-height: 250px;
  margin: 0 20px;
  transition: transform 0.5s ease-in-out;
`;

export const DivButton = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;

  button {
    z-index: 1;
    margin: 20px 0;
    background: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: bold;
    padding: 5px 12px;
    color: ${(props) => props.theme.colors.text};
  }
  button:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  .btn-left {
    visibility: hidden;
  }
  .btn-left,
  .btn-left:hover {
    background-image: url('/arrow.png');
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }
  .btn-right {
    visibility: visible;
  }
  .btn-right,
  .btn-right:hover {
    background-image: url('/arrow.png');
    background-position: center;
    background-repeat: no-repeat;
  }

  ${({ animationBtn }) =>
    animationBtn.statusBtnLeft &&
    css`
      .btn-left {
        visibility: visible;
      }
    `};
  ${({ animationBtn }) =>
    !animationBtn.statusBtnRight &&
    css`
      .btn-right {
        visibility: hidden;
      }
    `};
`;
