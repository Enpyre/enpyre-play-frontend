import { useAuth } from '../auth';
import { ToFuncRequest } from './types';

export const useToRequest: () => ToFuncRequest = () => {
  const { user, signOut } = useAuth();

  return {
    signOut,
    token: user?.token,
  };
};

export type { ToFuncRequest };
