export const uau = () => {
  return;
};
// import { KEYS } from '@/constants/keys';
// import { HttpClient } from '@/infra/http';
// import { IPublicService } from './types';

// export const publicService: IPublicService = {
//   signInOnGitHub: async <T>({code}: {code: string}) => {
//     const { result } = await HttpClient<T>('GET', {
//       host: KEYS.HOST.API_URL,
//       path: `/service`,
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//       validations: {
//         codeSuccess: 200,
//         msgError: 'Erro ao buscar itens',
//         others: (status) => {
//           if (status === 401 && signOut) {
//             signOut();
//             return;
//           }
//         },
//       },
//     });
//     return result;
//   }
// }
