import { KEYS } from '@/constants/keys';
import { HttpClient, HttpResponse } from '@/infra/http';

import { ResponseSignIn, SignInParams, SignInResult } from './types';

export const AuthService = {
  signIn: async (data: SignInParams): Promise<HttpResponse<ResponseSignIn>> => {
    const { result } = await HttpClient<ResponseSignIn>('POST', {
      host: KEYS.HOST.API_URL,
      path: '/login/social/jwt-pair/',
      data,
      validations: {
        codeSuccess: 200,
        msgError: 'Ops... ocorreu algum erro ao tentar fazer login',
      },
    });

    if (!result.error) {
      const { token, refresh } = result.data;

      return {
        error: false,
        data: {
          token,
          refresh,
        },
      };
    }

    return {
      ...result,
      data: {} as ResponseSignIn,
    };
  },
};
