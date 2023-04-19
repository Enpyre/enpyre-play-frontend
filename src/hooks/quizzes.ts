import { useContext } from 'react';

import { QuizContext } from '../contexts/quizzes';

export const useQuizzes = () => {
  return useContext(QuizContext);
};
