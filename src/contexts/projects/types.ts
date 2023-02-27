import { ReactNode } from 'react';

import { ToFuncRequest } from '@/hooks/to-request';

import { HttpResponse } from '../../infra/http';
import { User } from '../types';

export type Props = {
  children: ReactNode;
};

export type Project = {
  id: number;
  title: string;
  description?: string;
  code?: string;
  link?: string;
  shared: boolean;
  public: boolean;
  created_at: string;
  updated_at: string;
  user: User;
};

export type ProjectResponse = {
  count: number;
  next: string;
  previous: string;
  results: Project[];
};

export type ProjectContextData = {
  projects: ProjectResponse | null;
  project: Project | null;
  fetchProjects: ({ signOut }: ToFuncRequest) => Promise<void>;
  fetchProject: (id: number, shared_link?: string) => Promise<void>;
  createProject: (project: Project) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  partialUpdateProject: (project: Partial<Project>) => Promise<void>;
  deleteProject: (id: number, { signOut }: ToFuncRequest) => Promise<void>;
};

export interface IProjectServices {
  listProjects: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<ProjectResponse>>;
  getProject: (
    id: number,
    { signOut }: ToFuncRequest,
    shared_link?: string,
  ) => Promise<HttpResponse<Project>>;
  createProject: (
    project: Project,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Project>>;
  updateProject: (
    project: Project,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Project>>;
  partialUpdateProject: (
    project: Partial<Project>,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Project>>;
  deleteProject: (
    id: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<unknown>>;
}
