import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import { parseCookies } from 'nookies';

import { KEYS } from '@/constants/keys';
import { authServices } from '@/contexts/auth/services';
import { useAuth } from '@/hooks/auth';
import { useCookies } from '@/hooks/use-cookies';
import { createJWTCookie } from '@/utils';

import { HttpDefaultHeaders, HttpParamsRequest, HttpResponse } from '../http';
import { CUSTOM_HEADERS } from './constants';

export const client = (
  baseUrl: string,
  defaultHeader: HttpDefaultHeaders = 'JSON',
  headers?: AxiosRequestHeaders,
) => {
  const unitedHeaders = {
    ...CUSTOM_HEADERS[defaultHeader],
    ...(headers || {}),
  };

  const configJson: AxiosRequestConfig = {
    baseURL: baseUrl,
    timeout: 300000,
    headers: unitedHeaders,
  };

  const instance = axios.create(configJson);

  instance.interceptors.request.use(
    async (config) => {
      const { accessToken } = useCookies();
      if (accessToken && config.headers) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(undefined, async (err) => {
    if (err.response) {
      if (err.response.status === 401 && !err.config._retry) {
        err.config._retry = true;

        try {
          const refreshToken = parseCookies()[KEYS.STORAGE.USER_REFRESH_TOKEN];

          const { data, error } = await authServices.getRefreshToken(
            refreshToken,
          );

          if (!error) {
            // create cookie by access_token
            createJWTCookie(data.access, KEYS.STORAGE.USER_ACCESS_TOKEN);

            // create cookie by refresh_token
            createJWTCookie(data.refresh, KEYS.STORAGE.USER_REFRESH_TOKEN);

            return instance(err.config);
          }
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return err.response;
    }

    return false;
  });

  return instance;
};

export const core = async <T>(
  params: HttpParamsRequest,
  method: () => Promise<AxiosResponse<T>>,
) => {
  let response: AxiosResponse<T> = {} as AxiosResponse<T>;
  const result: HttpResponse = {
    code: 0,
    data: {},
    error: false,
    msgError: '',
  };

  const validations = params.validations;

  try {
    response = await method();

    if (typeof response === 'boolean') {
      throw new Error('Erro ao conectar com a api.');
    }

    if (validations?.others) {
      validations?.others(response.status, response.data);
    }

    if (
      !!validations?.codeSuccess &&
      response.status !== validations?.codeSuccess
    ) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (response.data as any)[validations.paramMsgError || 'error'] ||
          validations.msgError,
      );
    }

    result.data = response.data;
  } catch (err) {
    result.error = true;
    result.code = response?.status || 500;
    result.msgError = !(err as Error).message
      ? validations?.msgError
      : (err as Error).message;
  }

  return { response, result: result as HttpResponse<T> };
};
