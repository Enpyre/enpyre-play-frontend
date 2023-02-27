import { KEYS } from '@/constants/keys';
import { ToFuncRequest } from '@/hooks/to-request';
import { HttpClient } from '@/infra/http';

import { IQuizServices, Quiz, QuizResponse } from './types';

export const quizService: IQuizServices = {
  listQuizzes: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<QuizResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/quizzes/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listQuizzes');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  getQuiz: async (id: number, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<Quiz>('GET', {
      host: KEYS.HOST.API_URL,
      path: `/quizzes/${id}/`,
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do getQuiz');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  createQuiz: async (quiz: Quiz, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<Quiz>('POST', {
      host: KEYS.HOST.API_URL,
      path: '/quizzes/',
      data: quiz,
      validations: {
        codeSuccess: 201,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do createQuiz');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  updateQuiz: async (quiz: Quiz, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<Quiz>('PUT', {
      host: KEYS.HOST.API_URL,
      path: `/quizzes/${quiz.id}/`,
      data: quiz,
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do updateQuiz');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  partialUpdateQuiz: async (
    quiz: Partial<Quiz>,
    { signOut }: ToFuncRequest,
  ) => {
    const { result } = await HttpClient<Quiz>('PATCH', {
      host: KEYS.HOST.API_URL,
      path: `/quizzes/${quiz.id}/`,
      data: quiz,
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do partialUpdateQuiz');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  deleteQuiz: async (id: number, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<Quiz>('DELETE', {
      host: KEYS.HOST.API_URL,
      path: `/quizzes/${id}/`,
      validations: {
        codeSuccess: 204,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do deleteQuiz');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
};
