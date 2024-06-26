import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E3DB3D',
      light: colors.yellow[100],
    },
    secondary: {
      main: '#74E33D',
      dark: '#199628',
    },
    tertiary: { main: '#E3C73D' },
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
});
