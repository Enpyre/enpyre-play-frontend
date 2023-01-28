import { AuthProvider } from '@/contexts/auth';
import { ToggleThemeProvider } from '@/contexts/toggle-theme';
import { useTheme } from '@/hooks/theme';
import GlobalStyles from '@/view/styles.global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

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
          <Component {...pageProps} />
        </AuthProvider>
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}
