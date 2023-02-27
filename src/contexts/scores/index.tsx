import { createContext, useCallback, useState } from 'react';

import { useAuth } from '@/hooks/auth';

import { scoreService } from './services';
import {
  AllScoresResponse,
  Props,
  ScoreContextData,
  ScoreResponse,
} from './types';

export const ScoreContext = createContext<ScoreContextData>(
  {} as ScoreContextData,
);

export const ScoreProvider = ({ children }: Props) => {
  const [scores, setScores] = useState<ScoreResponse | null>(null);
  const [allScores, setAllScores] = useState<AllScoresResponse | null>(null);
  const { signOut } = useAuth();

  const fetchAllScores = useCallback(async () => {
    const { data, error } = await scoreService.listAllScores({ signOut });

    if (error) return;

    setAllScores(data);
  }, [signOut]);

  const fetchWeeklyScores = useCallback(async () => {
    const { data, error } = await scoreService.listWeeklyScores({ signOut });

    if (error) return;

    setScores(data);
  }, [signOut]);

  const fetchMonthlyScores = useCallback(async () => {
    const { data, error } = await scoreService.listMonthlyScores({ signOut });

    if (error) return;

    setScores(data);
  }, [signOut]);

  const fetchYearlyScores = useCallback(async () => {
    const { data, error } = await scoreService.listYearlyScores({ signOut });

    if (error) return;

    setScores(data);
  }, [signOut]);

  const fetchGlobalScores = useCallback(async () => {
    const { data, error } = await scoreService.listGlobalScores({ signOut });

    if (error) return;

    setScores(data);
  }, [signOut]);

  return (
    <ScoreContext.Provider
      value={{
        scores,
        allScores,
        fetchAllScores,
        fetchWeeklyScores,
        fetchMonthlyScores,
        fetchYearlyScores,
        fetchGlobalScores,
      }}>
      {children}
    </ScoreContext.Provider>
  );
};
