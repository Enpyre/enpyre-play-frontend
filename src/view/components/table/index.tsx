import { Pagination } from '../pagination';
import { NoData } from '../svg/no-data';
import * as S from './styles';
import { Props } from './types';

export const Table = ({
  isLoading,
  thead,
  tbody,
  controllers: { limit, totalItems, callbackHandlePage },
}: Props) => {
  return (
    <>
      {totalItems === 0 && !isLoading && <NoData />}
      {(totalItems !== 0 || isLoading) && (
        <>
          <S.Container>
            <S.Wrapper isLoading={isLoading}>
              <thead>
                <tr>
                  {thead.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{tbody}</tbody>
            </S.Wrapper>
          </S.Container>
          {limit && totalItems && callbackHandlePage ? (
            <Pagination
              limit={limit}
              total={totalItems}
              callbackHandlePage={callbackHandlePage}
            />
          ) : null}
        </>
      )}
    </>
  );
};
