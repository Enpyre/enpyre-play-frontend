import { Dispatch, ReactNode, SetStateAction } from 'react';

import { UserResponse } from '@/contexts/auth/types';
import { ToFuncRequest } from '@/hooks/to-request';
import { HttpResponse } from '@/infra/http';

import { User } from '../types';

export type Props = {
  children: ReactNode;
};

export type Project = {
  id?: number;
  title?: string;
  description?: string;
  code?: string;
  link?: string;
  shared?: boolean;
  public?: boolean;
  created_at?: string;
  updated_at?: string;
  user?: User | UserResponse;
};

export type ProjectSolution = {
  id?: number;
  code: string | undefined;
  project: number;
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
  projectSolution: ProjectSolution | null;
  fetchProjects: () => Promise<void>;
  fetchProjectSolution: (id: number) => Promise<void>;
  fetchProject: (id: number, shared_link?: string) => Promise<void>;
  createProject: (project: Project, user: User) => Promise<Project | undefined>;
  createProjectSolution: (
    project: ProjectSolution,
    projectId: number,
  ) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  partialUpdateProject: (project: Partial<Project>) => Promise<void>;
  partialUpdateProjectSolution: (
    projectSolution: Partial<ProjectSolution>,
    projectId: number,
  ) => Promise<void>;
  deleteProject: (id: number, { signOut }: ToFuncRequest) => Promise<void>;
  setProject: Dispatch<SetStateAction<Project | null>>;
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
  getSolution: (
    id: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<ProjectSolution>>;
  createProject: (
    project: Project,
    user: User,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Project>>;
  createProjectSolution: (
    projectSolution: ProjectSolution,
    projectId: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<ProjectSolution>>;
  updateProject: (
    project: Project,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Project>>;
  partialUpdateProject: (
    project: Partial<Project>,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Project>>;
  partialUpdateProjectSolution: (
    project: Partial<ProjectSolution>,
    projectId: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<ProjectSolution>>;
  deleteProject: (
    id: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<unknown>>;
}
