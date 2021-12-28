import styled from 'styled-components';

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
  div {
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

  &:hover div {
    transform: translateY(0);
  }
  &:hover {
    transform: scale(1.07);
  }
`;
