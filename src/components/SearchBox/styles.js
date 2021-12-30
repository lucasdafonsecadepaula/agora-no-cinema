import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .form-container {
    width: 100%;
  }

  .form-body {
    margin: 30px auto;
    min-width: 300px;
    position: relative;
    height: 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  .form-input {
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
    &:focus::placeholder {
      font-size: 0;
    }
  }

  .form-input:focus + .form-label {
    transform: translateY(-20px);
    opacity: 1;
    visibility: visible;
  }

  .form-label {
    visibility: hidden;
    font-weight: bold;
    position: absolute;
    top: 0;
    display: block;
    transition: all 0.3s;
    transform: translateY(20px);
    opacity: 0;
  }

  .btn-submit {
    cursor: pointer;
    position: absolute;
    top: 1px;
    right: 0;
    padding: 9px;
    background-color: ${(props) => props.theme.colors.tertiary};
    border: 0.1px solid ${(props) => props.theme.colors.text};
    border-radius: 7px;
  }
`;
