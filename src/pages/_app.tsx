import { ToggleThemeProvider } from '@/contexts/toggle-theme';
import { useTheme } from '@/hooks/theme';
import GlobalStyles from '@/view/styles.global';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}
