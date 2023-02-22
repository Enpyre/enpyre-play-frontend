import { useCallback, useContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { ToggleThemeContext } from '../contexts/toggle-theme';
import { dark, light } from '../helpers';

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  return { theme, toggleTheme };
};

export const useToggleTheme = () => {
  return useContext(ToggleThemeContext);
};
