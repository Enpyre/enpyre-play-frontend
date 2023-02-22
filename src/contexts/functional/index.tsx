import { createContext } from 'react';

import { ContextData, ContextParams } from './types';

export const FunctionalContext = createContext<ContextData>({} as ContextData);

export const FunctionalProvider = ({ children, ...rest }: ContextParams) => {
  return (
    <FunctionalContext.Provider value={{ ...rest }}>
      {children}
    </FunctionalContext.Provider>
  );
};
