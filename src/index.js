import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from './context/ModalProvider';
import { MovieRealesesProvider } from './context/MovieRealesesProvider';
import { ContextThemeProvider } from './context/ThemeProvider';

ReactDOM.render(
  <ModalProvider>
    <ContextThemeProvider>
      <MovieRealesesProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MovieRealesesProvider>
    </ContextThemeProvider>
  </ModalProvider>,
  document.getElementById('root'),
);
