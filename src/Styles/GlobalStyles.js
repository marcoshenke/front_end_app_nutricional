import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, createTheme, GlobalStyles } from '@mui/material';

const globalTheme = createTheme((theme) => ({
  '@global': {
    /* Estilos globais aqui */
    body: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Defina a fonte global
      margin: 0, // Remove margens padrão
      padding: 0, // Remove preenchimentos padrão
      boxSizing: 'border-box', // Garante que a largura e a altura incluam o preenchimento e a borda, mas não a margem
    },
    // Adicione mais estilos globais conforme necessário
  },
}));

export const GlobalStylesTheme = ({ children }) => {
  return (
    <>
      <GlobalStyles styles={globalTheme} />
      <CssBaseline /> {/* Reseta os estilos padrão do navegador */}
      {children}
    </>
  );
};

GlobalStylesTheme.propTypes = {
  children: PropTypes.element,
};
