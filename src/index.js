import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MovieRealesesProvider } from './hooks/MovieRealesesProvider';
import { ContextThemeProvider } from './hooks/ThemeProvider';

ReactDOM.render(
  <ContextThemeProvider>
    <MovieRealesesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MovieRealesesProvider>
  </ContextThemeProvider>,
  document.getElementById('root'),
);
