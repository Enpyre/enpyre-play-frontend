import { createContext, useCallback, useState } from 'react';

import { useAuth } from '@/hooks/auth';

import { scoreService } from './services';
import { Props, ScoreContextData, ScoreResponse } from './types';

export const ScoreContext = createContext<ScoreContextData>(
  {} as ScoreContextData,
);

export const ScoreProvider = ({ children }: Props) => {
  const [weeklyScore, setWeeklyScores] = useState<ScoreResponse | null>(null);
  const [monthlyScore, setMontlyScores] = useState<ScoreResponse | null>(null);
  const [yearlyScore, setYearlyScores] = useState<ScoreResponse | null>(null);
  const [globalScore, setGlobalScores] = useState<ScoreResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();

  const fetchWeeklyScores = useCallback(async () => {
    setLoading(true);
    const { data, error } = await scoreService.listWeeklyScores({ signOut });

    setLoading(false);
    if (error) return;

    setWeeklyScores(data);
  }, [signOut]);

  const fetchMonthlyScores = useCallback(async () => {
    setLoading(true);
    const { data, error } = await scoreService.listMonthlyScores({ signOut });

    setLoading(false);
    if (error) return;

    setMontlyScores(data);
  }, [signOut]);

  const fetchYearlyScores = useCallback(async () => {
    setLoading(true);
    const { data, error } = await scoreService.listYearlyScores({ signOut });

    setLoading(false);
    if (error) return;

    setYearlyScores(data);
  }, [signOut]);

  const fetchGlobalScores = useCallback(async () => {
    setLoading(true);
    const { data, error } = await scoreService.listGlobalScores({ signOut });

    setLoading(false);
    if (error) return;

    setGlobalScores(data);
  }, [signOut]);

  return (
    <ScoreContext.Provider
      value={{
        loading,
        weeklyScore,
        monthlyScore,
        yearlyScore,
        globalScore,
        fetchWeeklyScores,
        fetchMonthlyScores,
        fetchYearlyScores,
        fetchGlobalScores,
      }}>
      {children}
    </ScoreContext.Provider>
  );
};
