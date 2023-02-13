import { KEYS } from '@/constants/keys';
import { AuthService } from '@/view/environments/public/services/auth';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useCallback, useEffect, useState } from 'react';
import { authServices } from './services';

import {
  AuthContextData,
  ContextUser,
  Props,
  TokenAndRefresh,
  UserResponse,
} from './types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  const signIn = useCallback(async (user: ContextUser) => {
    try {
      const result = await AuthService.signIn({
        code: user.code,
        provider: user.provider,
      });

      if (result.error) {
        throw new Error(result.msgError);
      }
      setCookie(
        undefined,
        KEYS.STORAGE.USER_TOKEN,
        JSON.stringify(result.data),
        {
          maxAge: 60 * 60 * 1, // 1 hour
          path: '/',
        },
      );

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
    localStorage.removeItem(KEYS.STORAGE.USER_TOKEN);
    setUser(null);
  };

  const userData = useCallback(async () => {
    const cookies = parseCookies()[KEYS.STORAGE.USER_TOKEN];

    if (!cookies) return;

    const { token }: TokenAndRefresh = JSON.parse(cookies);

    if (!token) return signOut();

    const { data, error } = await authServices.getDataProfile({
      signOut,
      token,
    });

    if (error) return signOut();

    if (data) setUser(data);
  }, []);

  useEffect(() => {
    userData();
  }, []);
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
