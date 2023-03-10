import { KEYS } from '@/constants/keys';
import { ToFuncRequest } from '@/hooks/to-request';
import { HttpClient } from '@/infra/http';

import { IProjectServices, Project, ProjectResponse } from './types';

export const projectService: IProjectServices = {
  listProjects: async ({ signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<ProjectResponse>('GET', {
      host: KEYS.HOST.API_URL,
      path: '/projects/',
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do listProjects');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  getProject: async (
    id: number,
    { signOut }: ToFuncRequest,
    shared_link?: string,
  ) => {
    const { result } = await HttpClient<Project>('GET', {
      host: KEYS.HOST.API_URL,
      path: shared_link
        ? `/projects/${id}/?link=${shared_link}`
        : `/projects/${id}/`,
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do getProject');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  createProject: async (project: Project, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<Project>('POST', {
      host: KEYS.HOST.API_URL,
      path: '/projects/',
      data: project,
      validations: {
        codeSuccess: 201,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do createProject');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  updateProject: async (project: Project, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<Project>('PUT', {
      host: KEYS.HOST.API_URL,
      path: `/projects/${project.id}/`,
      data: project,
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do updateProject');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  partialUpdateProject: async (
    project: Partial<Project>,
    { signOut }: ToFuncRequest,
  ) => {
    const { result } = await HttpClient<Project, Partial<Project>>('PATCH', {
      host: KEYS.HOST.API_URL,
      path: `/projects/${project.id}/`,
      data: project,
      validations: {
        codeSuccess: 200,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do partialUpdateProject');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
  deleteProject: async (id: number, { signOut }: ToFuncRequest) => {
    const { result } = await HttpClient<unknown>('DELETE', {
      host: KEYS.HOST.API_URL,
      path: `/projects/${id}/`,
      validations: {
        codeSuccess: 204,
        msgError: 'Aconteceu algum problema para buscar os dados do usuário',
        others: (status) => {
          if (status === 401 && signOut) {
            console.log('entrou no signout do deleteProject');
            signOut();
            return;
          }
        },
      },
    });
    return result;
  },
};
