import { ReactNode } from 'react';

import { ToFuncRequest } from '@/hooks/to-request';

import { HttpResponse } from '../../infra/http';
import { User } from '../types';

export type Props = {
  children: ReactNode;
};

export type Score = {
  total: number;
  average: number;
  user: User;
};

export enum ScoreType {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
  GLOBAL = 'GLOBAL',
}

export type AllScores = {
  score_type: ScoreType;
  year: number;
  month: number;
  week: number;
  user_scores: Score[];
};

export type ScoreResponse = {
  count: number;
  next: string;
  previous: string;
  results: Score[];
};

export type AllScoresResponse = {
  count: number;
  next: string;
  previous: string;
  results: AllScores[];
};

export type ScoreContextData = {
  loading: boolean;
  weeklyScore: ScoreResponse | null;
  monthlyScore: ScoreResponse | null;
  yearlyScore: ScoreResponse | null;
  globalScore: ScoreResponse | null;
  fetchWeeklyScores: () => Promise<void>;
  fetchMonthlyScores: () => Promise<void>;
  fetchYearlyScores: () => Promise<void>;
  fetchGlobalScores: () => Promise<void>;
};

export interface IScoreServices {
  listAllScores: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<AllScoresResponse>>;

  listWeeklyScores: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<ScoreResponse>>;

  listMonthlyScores: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<ScoreResponse>>;

  listYearlyScores: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<ScoreResponse>>;

  listGlobalScores: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<ScoreResponse>>;
}
