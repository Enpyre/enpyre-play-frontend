import { KEYS } from '@/constants/keys';
import { ToFuncRequest } from '@/hooks/to-request';
import { HttpClient } from '@/infra/http';
import { IAuthServices } from './types';

export const authServices: IAuthServices = {
  getDataProfile: async <T>({ signOut, token }: ToFuncRequest) => {
    const { result } = await HttpClient<T>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/users/profile/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
};
