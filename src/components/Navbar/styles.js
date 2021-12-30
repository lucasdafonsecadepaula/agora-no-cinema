import styled from 'styled-components';

export const Bar = styled.div`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 15px;
      margin-bottom: 10px;
    }
  }
`;
