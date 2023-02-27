import { useContext } from 'react';

import { ScoreContext } from '../contexts/scores';

export const useScore = () => {
  return useContext(ScoreContext);
};
