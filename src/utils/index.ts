import jwtDecode, { JwtPayload } from 'jwt-decode';
import { setCookie } from 'nookies';

export const createJWTCookie = (token: string, key: string, path?: string) => {
  const decodeAccessToken = jwtDecode<JwtPayload>(token);

  // calcula tempo em segundos da expiração do cookie
  const expirationAccessTokenCookie =
    (decodeAccessToken.exp ?? 0) - (decodeAccessToken.iat ?? 0);

  setCookie(undefined, key, token, {
    maxAge: expirationAccessTokenCookie,
    path: path ?? '/',
  });
};

type ConvertFontType = {
  toRem: (value: number) => string;
};

export const convertFont: ConvertFontType = {
  toRem: (value: number) => {
    return `${value / 16}rem`;
  },
};
