import { KEYS } from '@/constants/keys';
import { ToFuncRequest } from '@/hooks/to-request';
import { HttpClient } from '@/infra/http';

import { AllScoresResponse, IScoreServices, ScoreResponse } from './types';

export const scoreService: IScoreServices = {
  listAllScores: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<AllScoresResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/scores/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listAllScores');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  listWeeklyScores: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<ScoreResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/scores/weekly/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listWeeklyScores');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  listMonthlyScores: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<ScoreResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/scores/monthly/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listMonthlyScores');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  listYearlyScores: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<ScoreResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/scores/yearly/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listYearlyScores');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  listGlobalScores: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<ScoreResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/scores/global/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listGlobalScores');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
};
