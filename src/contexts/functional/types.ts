import { ReactNode } from 'react';

export type ContextParams = {
  children: ReactNode;
  toggleTheme: () => void;
};

export type ContextData = Omit<ContextParams, 'children'>;
