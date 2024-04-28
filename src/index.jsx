import React from 'react';
import ReactDOM from 'react-dom/client';
import { CompareFoods, Home, Page404 } from './Views';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme, GlobalStylesTheme } from './Styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStylesTheme>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare-foods" element={<CompareFoods />} />
            <Route path="/page-not-found" element={<Page404 />} />
          </Routes>
        </GlobalStylesTheme>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
