import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useQuizzes } from '@/hooks/quizzes';
import { PageIdentification } from '@/view/components/page-identification';
import { Button } from '@/view/components/ui/button';
import {
  CardList,
  ItemCard,
  ItemDescription,
  ItemTitle,
} from '@/view/components/ui/card-list';

import { Header } from '../../../layout/header';
import { PRIVATE_ROUTES } from '../../../paths.routes';
import * as S from './styles';

export const QuizzView = () => {
  const { fetchQuizzes, quizzes } = useQuizzes();
  const router = useRouter();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);
  return (
    <>
      <Header />
      <S.Container>
        <PageIdentification title="Responder Quizz" />
        <S.Content>
          <S.ButtonWrapper>
            <Button
              title="Criar Quizz"
              onClick={() => router.push(PRIVATE_ROUTES.QUIZZES.CREATE)}
            />
          </S.ButtonWrapper>
          <CardList>
            {quizzes?.results.map((quiz) => (
              <ItemCard
                key={quiz.id}
                href={`${PRIVATE_ROUTES.QUIZZES.VIEW}/${quiz.id}`}>
                <ItemTitle>{quiz.title}</ItemTitle>
                <ItemDescription>
                  {quiz.description || 'Sem descrição'}
                </ItemDescription>
              </ItemCard>
            ))}
          </CardList>
        </S.Content>
      </S.Container>
    </>
  );
};
