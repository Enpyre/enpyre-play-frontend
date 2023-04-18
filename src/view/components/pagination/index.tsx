import { CaretLeft, CaretRight } from 'phosphor-react';
import { Fragment, useEffect, useState } from 'react';

import * as S from './styles';

type Props = {
  limit: number;
  total: number;
  callbackHandlePage(page: number): void;
};

const MAX_ITEMS = 11;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({ limit, total, callbackHandlePage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pages = Math.ceil(total / limit);
  const first = pages <= MAX_ITEMS ? 1 : Math.max(currentPage - MAX_LEFT, 1);

  useEffect(() => {
    setIsLoading(total === 0 ?? true);
  }, [total]);

  const handlePagination = (handleCurrentPage: number) => {
    setCurrentPage(handleCurrentPage);
    callbackHandlePage(handleCurrentPage);
  };

  const handlePrevious = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage((old) => old - 1);
      callbackHandlePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage + 1 <= pages) {
      setCurrentPage((old) => old + 1);
      callbackHandlePage(currentPage + 1);
    }
  };
  return (
    <S.Wrapper>
      <S.Paginator isLoading={isLoading}>
        <button onClick={() => handlePrevious()}>
          <CaretLeft />
        </button>
        <ul>
          {Array.from({ length: Math.min(MAX_ITEMS, pages) })
            .map((_, index) => index + first)
            .map((page, i) => (
              <Fragment key={String(`${page + i}`)}>
                {page <= pages && (
                  <li className={page === currentPage ? 'on' : ''}>
                    <button onClick={() => handlePagination(page)}>
                      {page}
                    </button>
                  </li>
                )}
              </Fragment>
            ))}
        </ul>
        <button onClick={() => handleNext()}>
          <CaretRight />
        </button>
      </S.Paginator>
    </S.Wrapper>
  );
};
