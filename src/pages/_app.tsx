import '@/view/styles.global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@/contexts/auth';
import { ToggleThemeProvider } from '@/contexts/toggle-theme';
import { useTheme } from '@/hooks/theme';
import GlobalStyles from '@/view/styles.global';

export default function App({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AuthProvider>
          <Head>
            <title>Enpyre - A Python game engine in React</title>
          </Head>
          <Component {...pageProps} />
        </AuthProvider>
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}
