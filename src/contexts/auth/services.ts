import { KEYS } from '@/constants/keys';
import { ToFuncRequest } from '@/hooks/to-request';
import { HttpClient } from '@/infra/http';
import { IAuthServices } from './types';

export const authServices: IAuthServices = {
  getDataProfile: async <T>({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<T>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/users/profile/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 400 && signOut) {
            console.log('entrou no signout do dataProfile');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },

  getRefreshToken: async <T>(refresh: string) => {
    const { result } = await HttpClient<T>('POST', {
      host: KEYS.HOST.API_URL,
      path: 'token/refresh/',
      data: {
        refresh,
      },
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema durante a regeneração do token',
      },
    });
    return result;
  },
};
