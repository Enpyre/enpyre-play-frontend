import { useAuth } from '../auth';
import { ToFuncRequest } from './types';

export const useToRequest: () => ToFuncRequest = () => {
  const { signOut } = useAuth();

  return {
    signOut,
  };
};

export type { ToFuncRequest };
