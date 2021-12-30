import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  padding: 25px;
  background: ${({ bgPhoto }) => bgPhoto};
  background-position: center 15%;
  border-radius: 10px;
  @media screen and (max-height: 600px) {
    padding: 0;
  }
  @media screen and (max-height: 550px) {
    font-size: 10px;
  }

  .close-button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
    cursor: pointer;
    background-color: #222;
    color: #eaeaea;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 20px;
    line-height: 5px;
  }

  iframe {
    width: 100%;
    aspect-ratio: 1920/1080;
    border-radius: 8px;
  }

  .fix-margin {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(14.5px);
    -webkit-backdrop-filter: blur(14.5px);
    border-radius: 10px;
    padding: 10px 0;
    margin: 20px 0;
  }

  .text-place {
    width: 95%;
  }

  .header-text {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .circule-average {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    border: 2px solid;

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
  }

  .overview {
    font-weight: 500;
  }

  .release-date {
    text-align: end;
    margin-top: 10px;
  }
`;
