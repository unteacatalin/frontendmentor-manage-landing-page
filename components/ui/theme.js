import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(12, 88%, 59%)',
    },
    secondary: {
      main: 'hsl(228, 39%, 23%)',
    },
    common: {
      bright_red: 'hsl(12, 88%, 59%)',
      dark_blue: 'hsl(228, 39%, 23%)',
      dark_grayish_blue: 'hsl(227, 12%, 61%)',
      very_dark_blue: 'hsl(233, 12%, 13%)',
      very_pale_red: 'hsl(13, 100%, 96%)',
      very_light_gray: 'hsl(0, 0%, 80%)',
      light_yellow: 'hsl(13, 100%, 96%)',
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    body: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xxs: 100,
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
      xxxl: 2080,
    },
  },
});

export default theme;
