import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    scroll-behavior: smooth;
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    font-family: sans-serif;
}

.modal-overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) =>
      props.theme.title === 'dark'
        ? 'rgba(0,0,0,0.3)'
        : 'rgba(255,255,255,0.3)'};	
}

.modal-content{
    position: relative;
    box-shadow: 2px 5px rgba(0,0,0, 0.3);
    border: 1px solid;
    border-radius: 10px;
    width: 65%;
    height: auto;
    background: ${(props) => props.theme.colors.background};
    outline: none;
    color: ${(props) => props.theme.colors.text}
}

.ReactModal__Body--open,
.ReactModal__Html--open {
  overflow: hidden;
  .btn-left, .btn-right{
         display: none;
  }
}

.ReactModal__Content {
    opacity: 0;
    transform: scale(0.9);
    transition: all 300ms ease-in-out;
}

.ReactModal__Content--after-open{
    opacity: 1;
    transform: scale(1);
}

.ReactModal__Overlay {
    transform: scale(1);
    transition: all 300ms ease-in-out;
}

.ReactModal__Overlay--before-close{
    transform: scale(0.9);
}

@media screen and (max-width: 600px) {
    .modal-content{
        width: 99%;
    }
}
`;
