import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  padding: 20px;
  background: ${({ bgPhoto }) => bgPhoto};
  background-position: center 15%;
  border-radius: 10px;

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

  h3 {
    font-weight: 500;
  }
  p {
    text-align: end;
    margin-top: 10px;
  }

  iframe {
    width: 100%;
    aspect-ratio: 1920/1080;
    border-radius: 8px;
  }

  @media screen and (max-height: 750px) {
    iframe {
      width: 70%;
      aspect-ratio: 1920/1080;
    }
  }
  @media screen and (max-height: 600px) {
    iframe {
      width: 40%;
      aspect-ratio: 1920/1080;
    }
  }
`;
