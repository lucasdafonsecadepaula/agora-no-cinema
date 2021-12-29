/* eslint-disable camelcase */
import styled from 'styled-components';

export const VoteAverage = styled.div`
  border: 3px solid;
  ${({ voteAverage }) =>
    voteAverage > 4 &&
    `
         border-color: rgb(204,85,0);
    `}

  ${({ voteAverage }) =>
    voteAverage > 6 &&
    `
         border-color: rgb(255,244,79);
    `}
  ${({ voteAverage }) =>
    voteAverage > 8 &&
    `
         border-color: rgb(57,255,20);
    `}
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  background: ${(props) => props.theme.colors.secondary};
`;

export const Body = styled.div`
  cursor: pointer;
  min-width: 200px;
  min-height: 250px;
  margin: 20px 15px;
  border-radius: 10px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  img {
    border-radius: 10px;
    display: block;
    width: 100%;
    height: 100%;
  }

  .description {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    max-height: 100%;
    padding: 0.5rem;
    transform: translateY(101%);
    transition: transform 0.5s ease-in-out;
  }

  &:hover .description {
    transform: translateY(0);
  }
  &:hover {
    transform: scale(1.07);
  }
`;
