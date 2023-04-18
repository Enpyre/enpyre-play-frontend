import { createContext, useCallback, useState } from 'react';

import { useAuth } from '@/hooks/auth';

import { quizService } from './services';
import {
  Props,
  QuestionResponse,
  Quiz,
  QuizContextData,
  QuizResponse,
} from './types';

export const QuizContext = createContext<QuizContextData>(
  {} as QuizContextData,
);

export const QuizProvider = ({ children }: Props) => {
  const [quizzes, setQuizzes] = useState<QuizResponse | null>(null);
  const [quiz, setQuiz] = useState<QuestionResponse | null>(null);
  const { signOut } = useAuth();

  const fetchQuizzes = useCallback(async () => {
    const { data, error } = await quizService.listQuizzes({ signOut });

    if (error) return;

    setQuizzes(data);
  }, [signOut]);

  const fetchQuiz = useCallback(
    async (id: number) => {
      const { data, error } = await quizService.getQuiz(id, { signOut });

      if (error) return;

      setQuiz(data);
    },
    [signOut],
  );

  const createQuiz = useCallback(
    async (quiz: Quiz) => {
      const { data, error, msgError } = await quizService.createQuiz(quiz, {
        signOut,
      });

      if (error) return { data, error, msgError };

      return { data, error, msgError };
    },
    [signOut],
  );

  const updateQuiz = useCallback(
    async (quiz: Quiz) => {
      const { data, error } = await quizService.updateQuiz(quiz, {
        signOut,
      });

      if (error) return;

      setQuiz(data);
    },
    [signOut],
  );

  const partialUpdateQuiz = useCallback(
    async (quiz: Partial<Quiz>) => {
      const { data, error } = await quizService.partialUpdateQuiz(quiz, {
        signOut,
      });

      if (error) return;

      setQuiz(data);
    },
    [signOut],
  );

  const deleteQuiz = useCallback(
    async (id: number) => {
      const { error } = await quizService.deleteQuiz(id, { signOut });

      if (error) return;

      setQuiz(null);
    },
    [signOut],
  );

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        quiz,
        fetchQuizzes,
        fetchQuiz,
        createQuiz,
        updateQuiz,
        partialUpdateQuiz,
        deleteQuiz,
      }}>
      {children}
    </QuizContext.Provider>
  );
};
