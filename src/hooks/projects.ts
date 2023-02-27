import { useContext } from 'react';

import { ProjectContext } from '../contexts/projects';

export const useScore = () => {
  return useContext(ProjectContext);
};
