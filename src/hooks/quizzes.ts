import { useContext } from 'react';

import { QuizContext } from '../contexts/quizzes';

export const useScore = () => {
  return useContext(QuizContext);
};
