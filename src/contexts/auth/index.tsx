import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { createContext, useCallback, useEffect, useState } from 'react';

import { KEYS } from '@/constants/keys';
import { useCookies } from '@/hooks/cookies';
import { createJWTCookie } from '@/utils';
import { AuthService } from '@/view/environments/public/services/auth';

import { authServices } from './services';
import { AuthContextData, ContextUser, Props, UserResponse } from './types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const router = useRouter();
  const { refreshToken } = useCookies();

  const signIn = useCallback(async (user: ContextUser) => {
    try {
      const result = await AuthService.signIn({
        code: user.code,
        provider: user.provider,
      });

      if (result.error) {
        throw new Error(result.msgError);
      }

      // create cookie by access_token
      createJWTCookie(result.data.token, KEYS.STORAGE.USER_ACCESS_TOKEN);

      // create cookie by refresh_token
      createJWTCookie(result.data.refresh, KEYS.STORAGE.USER_REFRESH_TOKEN);

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

  const signOut = useCallback(async (): Promise<void> => {
    destroyCookie(undefined, KEYS.STORAGE.USER_ACCESS_TOKEN);
    destroyCookie(undefined, KEYS.STORAGE.USER_REFRESH_TOKEN);
    setUser(null);
    router.push('/');
  }, [router]);

  const userData = useCallback(async () => {
    const { data, error } = await authServices.getDataProfile({
      signOut,
    });

    if (error) return;

    if (data) setUser(data);
  }, [signOut]);

  useEffect(() => {
    if (router.asPath !== '/' && refreshToken) {
      userData();
    }
  }, [router.asPath, refreshToken, userData]);
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
