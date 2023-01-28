import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

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
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(undefined, (err) => {
    if (err.response) {
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
    result.code = response.status || 500;
    result.msgError = !(err as Error).message
      ? validations?.msgError
      : (err as Error).message;
  }

  return { response, result: result as HttpResponse<T> };
};
