import { AxiosRequestConfig } from 'axios';

import { client, core } from '../axios';
import { HttpParamsRequest, HttpTypeRequest } from './types';

/**
 * Adaptador de requisição que deve ser usado em chamadas http
 *
 * ```
 *  T -> tipo dos dados de saida
 *  D -> tipo dos dados de entrada
 *  S -> tipo do objeto de configuração. User o `AxiosRequestConfig<any>`
 * ```
 *
 * @param method : HttpTypeRequest
 * @param param1 : HttpParamsRequest
 * @returns
 */
export const HttpClient = <T = unknown, D = unknown, S = unknown>(
  method: HttpTypeRequest,
  { ...params }: HttpParamsRequest<D, S>,
) => {
  const api = client(params.host, params.defaultHeader, params.headers);
  const config = params.config as AxiosRequestConfig<unknown> | undefined;

  const methods = {
    GET: () => api.get(params.path, config),
    DELETE: () => api.delete(params.path, config),
    PUT: () => api.put(params.path, params.data, config),
    POST: () => api.post(params.path, params.data, config),
    PATCH: () => api.patch(params.path, params.data, config),
  };

  return core<T>(params, methods[method]);
};
