import { KEYS } from '@/constants/keys';
import { AuthService } from '@/view/environments/public/services/auth';
import { createContext, useCallback, useState } from 'react';

import { AuthContextData, ContextUser, Props } from './types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<ContextUser | null>(() => {
    const user =
      typeof window !== 'undefined'
        ? window.localStorage.getItem(KEYS.STORAGE.USER)
        : false;
    return user ? JSON.parse(user) : null;
  });

  const signIn = useCallback(async (user: ContextUser) => {
    try {
      const result = await AuthService.signIn({
        code: user.code,
        provider: user.provider,
      });

      if (result.error) {
        throw new Error(result.msgError);
      }

      localStorage.setItem(KEYS.STORAGE.USER, JSON.stringify(result.data));
      setUser(result.data);

      return result;
    } catch (err) {
      setUser(null);
      return {
        data: null,
        error: true,
        msgError: (err as Error)['message'],
      };
    }
  }, []);

  const signOut = async (): Promise<void> => {
    localStorage.removeItem(KEYS.STORAGE.USER);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        setUser,
        signOut,
        logged: Boolean(user),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
