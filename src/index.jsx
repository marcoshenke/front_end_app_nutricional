import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme, GlobalStylesTheme } from './Styles';
import { Router } from 'Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStylesTheme>
          <Router />
        </GlobalStylesTheme>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
