import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import '../styles/globals.css';
import theme from '../components/ui/theme';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export default function App({ Component, pageProps }) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
