import { createContext, useCallback, useState } from 'react';

import { useAuth } from '@/hooks/auth';

import { projectService } from './services';
import { Project, ProjectContextData, ProjectResponse, Props } from './types';

export const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider = ({ children }: Props) => {
  const [stateProjects, setStateProjects] = useState<ProjectResponse | null>(
    null,
  );
  const [stateProject, setStateProject] = useState<Project | null>(null);
  const { signOut } = useAuth();

  const listProjects = useCallback(async () => {
    const { data, error } = await projectService.listProjects({ signOut });

    if (error) return;

    setStateProjects(data);
  }, [signOut]);

  const getProject = useCallback(
    async (id: number, shared_link?: string) => {
      const { data, error } = await projectService.getProject(
        id,
        { signOut },
        shared_link,
      );

      if (error) return;

      setStateProject(data);
    },
    [signOut],
  );

  const createProject = useCallback(
    async (project: Project) => {
      const { data, error } = await projectService.createProject(project, {
        signOut,
      });

      if (error) return;

      setStateProject(data);
    },
    [signOut],
  );

  const updateProject = useCallback(
    async (project: Project) => {
      const { data, error } = await projectService.updateProject(project, {
        signOut,
      });

      if (error) return;

      setStateProject(data);
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

      setStateProject(data);
    },
    [signOut],
  );

  const deleteProject = useCallback(
    async (id: number) => {
      const { error } = await projectService.deleteProject(id, { signOut });

      if (error) return;

      setStateProject(null);
    },
    [signOut],
  );

  return (
    <ProjectContext.Provider
      value={{
        stateProjects,
        stateProject,
        listProjects,
        getProject,
        createProject,
        updateProject,
        partialUpdateProject,
        deleteProject,
      }}>
      {children}
    </ProjectContext.Provider>
  );
};
