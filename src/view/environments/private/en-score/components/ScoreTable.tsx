import React, { useEffect, useMemo } from 'react';

import { ScoreResponse } from '@/contexts/scores/types';
import { Table } from '@/view/components/table';

type Props = {
  loading: boolean;
  fetch: () => void;
  score: ScoreResponse | null;
  amountType: 'Total' | 'Average';
};

export const ScoreTable: React.FC<Props> = ({
  loading,
  fetch,
  score,
  amountType,
}) => {
  const headers = useMemo(() => ['User', amountType], [amountType]);

  const contents = useMemo(
    () =>
      score?.results.map((result) => (
        <tr
          key={result.user.id}
          className="flex w-full flex-row items-center justify-between">
          <td className="flex flex-col items-start justify-center">
            {result.user.first_name}
          </td>
          <td className="flex flex-col items-start justify-center">
            {amountType === 'Total' ? result.total : result.average}
          </td>
        </tr>
      )),
    [amountType, score?.results],
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Table
      isLoading={loading}
      controllers={{
        limit: 10,
        totalItems: score?.count,
        callbackHandlePage: fetch,
      }}
      thead={headers}
      tbody={contents}
    />
  );
};
