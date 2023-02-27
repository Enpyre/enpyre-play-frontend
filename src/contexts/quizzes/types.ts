import { ReactNode } from 'react';

import { ToFuncRequest } from '@/hooks/to-request';

import { HttpResponse } from '../../infra/http';
import { User } from '../types';

export type Props = {
  children: ReactNode;
};

export enum QuizType {
  MULTIPLE_CHOICE = 'multiple_choice',
  TRUE_FALSE = 'true_false',
  FILL_IN_THE_BLANK = 'fill_in_the_blank',
  MULTIPLE_ANSWER = 'multiple_answer',
}

export type Answer = {
  id: number;
  title: string;
  content: string;
  is_correct: boolean;
  score_amount: number;
  position: number;
};

export type Question = {
  id: number;
  title: string;
  content: string;
  position: number;
  answers: Answer[];
};

export type Quiz = {
  id: number;
  title: string;
  description?: string;
  quizz_type: QuizType;
  owner: User;
  questions: Question[];
};

export type QuizResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Quiz[];
};

export type QuizContextData = {
  quizzes: QuizResponse | null;
  quiz: Quiz | null;
  fetchQuizzes: () => Promise<void>;
  fetchQuiz: (id: number) => Promise<void>;
  createQuiz: (quiz: Quiz) => Promise<void>;
  updateQuiz: (quiz: Quiz) => Promise<void>;
  partialUpdateQuiz: (quiz: Partial<Quiz>) => Promise<void>;
  deleteQuiz: (id: number) => Promise<void>;
};

export interface IQuizServices {
  listQuizzes: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<QuizResponse>>;
  getQuiz: (
    id: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Quiz>>;
  createQuiz: (
    quiz: Quiz,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Quiz>>;
  updateQuiz: (
    quiz: Quiz,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Quiz>>;
  partialUpdateQuiz: (
    quiz: Partial<Quiz>,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<Quiz>>;
  deleteQuiz: (
    id: number,
    { signOut }: ToFuncRequest,
  ) => Promise<HttpResponse<unknown>>;
}
