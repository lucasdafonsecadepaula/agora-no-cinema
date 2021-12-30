import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from './context/ModalProvider';
import { MovieReleasesProvider } from './context/MovieReleasesProvider';
import { ContextThemeProvider } from './context/ThemeProvider';
import App from './App';

ReactDOM.render(
  <ModalProvider>
    <ContextThemeProvider>
      <MovieReleasesProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MovieReleasesProvider>
    </ContextThemeProvider>
  </ModalProvider>,
  document.getElementById('root'),
);
