import React, { useEffect } from 'react';

import { useScore } from '@/hooks/scores';
import { Tab } from '@/view/components/ui/tab';

import { Header } from '../layout/header';
import { ScoreTable } from './components/ScoreTable';
import * as S from './styles';

export const EnScore: React.FC = () => {
  const {
    fetchGlobalScores,
    fetchMonthlyScores,
    fetchWeeklyScores,
    fetchYearlyScores,
    loading,
    globalScore,
    monthlyScore,
    weeklyScore,
    yearlyScore,
  } = useScore();

  useEffect(() => {
    fetchWeeklyScores();
    fetchMonthlyScores();
    fetchYearlyScores();
    fetchGlobalScores();
  }, [
    fetchWeeklyScores,
    fetchMonthlyScores,
    fetchYearlyScores,
    fetchGlobalScores,
  ]);

  return (
    <>
      <Header />
      <S.Wrapper>
        <Tab
          id="score"
          headers={[
            {
              label: 'Weekly Score',
              id: 'weekly-score',
            },
            {
              label: 'Monthly Score',
              id: 'monthly-score',
            },
            {
              label: 'Yearly Score',
              id: 'yearly-score',
            },
            {
              label: 'Global Score',
              id: 'global-score',
            },
          ]}
          contents={[
            {
              id: 'weekly-score',
              content: (
                <ScoreTable
                  loading={loading}
                  amountType="Total"
                  fetch={fetchWeeklyScores}
                  score={weeklyScore}
                  key="weekly-score"
                />
              ),
            },
            {
              id: 'monthly-score',
              content: (
                <ScoreTable
                  loading={loading}
                  amountType="Total"
                  fetch={fetchMonthlyScores}
                  score={monthlyScore}
                  key="monthly-score"
                />
              ),
            },
            {
              id: 'yearly-score',
              content: (
                <ScoreTable
                  loading={loading}
                  amountType="Average"
                  fetch={fetchYearlyScores}
                  score={yearlyScore}
                  key="yearly-score"
                />
              ),
            },
            {
              id: 'global-score',
              content: (
                <ScoreTable
                  loading={loading}
                  amountType="Average"
                  fetch={fetchGlobalScores}
                  score={globalScore}
                  key="global-score"
                />
              ),
            },
          ]}
        />
      </S.Wrapper>
    </>
  );
};
