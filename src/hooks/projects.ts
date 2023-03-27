import { useContext } from 'react';

import { ProjectContext } from '../contexts/projects';

export const useProjects = () => {
  return useContext(ProjectContext);
};
