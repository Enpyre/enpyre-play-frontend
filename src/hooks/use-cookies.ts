import { KEYS } from '@/constants/keys';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';

export const useCookies = (
  value?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const isLogged = parseCookies(value)[KEYS.STORAGE.USER_REFRESH_TOKEN];
  const accessToken = parseCookies()[KEYS.STORAGE.USER_ACCESS_TOKEN];
  const refreshToken = parseCookies()[KEYS.STORAGE.USER_REFRESH_TOKEN];

  return { isLogged, accessToken, refreshToken };
};
