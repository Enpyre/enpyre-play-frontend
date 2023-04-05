import { createContext, useCallback, useState } from 'react';

import { useAuth } from '@/hooks/auth';

import { projectService } from './services';
import {
  Project,
  ProjectContextData,
  ProjectResponse,
  ProjectSolution,
  Props,
} from './types';

export const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<ProjectResponse | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [projectSolution, setProjectSolution] =
    useState<ProjectSolution | null>(null);
  const { signOut } = useAuth();

  const fetchProjects = useCallback(async () => {
    const { data, error } = await projectService.listProjects({ signOut });

    if (error) return;

    setProjects(data);
  }, [signOut]);

  const fetchProject = useCallback(
    async (id: number, shared_link?: string) => {
      const { data, error } = await projectService.getProject(
        id,
        { signOut },
        shared_link,
      );

      if (error) return;

      setProject(data);
    },
    [signOut],
  );

  const fetchProjectSolution = useCallback(
    async (projectId: number) => {
      const { data, error } = await projectService.getSolution(projectId, {
        signOut,
      });

      if (error) return;

      setProjectSolution(data);
    },
    [signOut],
  );

  const createProject = useCallback(
    async (project: Project) => {
      const { data, error } = await projectService.createProject(project, {
        signOut,
      });

      if (error) return;

      setProject(data);
    },
    [signOut],
  );

  const createProjectSolution = useCallback(
    async (projectSolution: ProjectSolution, projectId: number) => {
      const { data, error } = await projectService.createProjectSolution(
        projectSolution,
        projectId,
        { signOut },
      );

      if (error) return;

      setProjectSolution(data);
    },
    [signOut],
  );

  const updateProject = useCallback(
    async (project: Project) => {
      const { data, error } = await projectService.updateProject(project, {
        signOut,
      });

      if (error) return;

      setProject(data);
    },
    [signOut],
  );

  const partialUpdateProject = useCallback(
    async (project: Partial<Project>) => {
      const { data, error } = await projectService.partialUpdateProject(
        project,
        {
          signOut,
        },
      );

      if (error) return;

      setProject(data);
    },
    [signOut],
  );

  const partialUpdateProjectSolution = useCallback(
    async (projectSolution: Partial<ProjectSolution>, projectId: number) => {
      const { data, error } = await projectService.partialUpdateProjectSolution(
        projectSolution,
        projectId,
        {
          signOut,
        },
      );

      if (error) return;

      setProjectSolution(data);
    },
    [signOut],
  );

  const deleteProject = useCallback(
    async (id: number) => {
      const { error } = await projectService.deleteProject(id, { signOut });

      if (error) return;

      setProject(null);
    },
    [signOut],
  );

  return (
    <ProjectContext.Provider
      value={{
        projects,
        project,
        projectSolution,
        fetchProjectSolution,
        fetchProjects,
        fetchProject,
        createProject,
        createProjectSolution,
        updateProject,
        partialUpdateProject,
        partialUpdateProjectSolution,
        deleteProject,
      }}>
      {children}
    </ProjectContext.Provider>
  );
};
