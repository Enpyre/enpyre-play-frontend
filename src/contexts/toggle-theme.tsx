import { createContext, ReactNode, useMemo } from 'react';
import { useTheme } from '../hooks/theme';

type ToggleThemeContextData = Omit<ReturnType<typeof useTheme>, 'theme'>;

type ToggleThemeContextProps = ToggleThemeContextData & {
  children: ReactNode;
};

export const ToggleThemeContext = createContext<ToggleThemeContextData>(
  {} as ToggleThemeContextData,
);

export const ToggleThemeProvider = ({
  children,
  toggleTheme,
}: ToggleThemeContextProps) => {
  const value = useMemo(() => ({ toggleTheme }), [toggleTheme]);

  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
