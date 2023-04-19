import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useQuizzes } from '@/hooks/quizzes';
import { PageIdentification } from '@/view/components/page-identification';
import { Button } from '@/view/components/ui/button';

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
    <S.Wrapper>
      <Header />
      <PageIdentification title="Responder Quizz" />
      <S.Content>
        <Button
          title="Criar Quizz"
          onClick={() => router.push(PRIVATE_ROUTES.QUIZZES.CREATE)}
        />

        <div>
          {quizzes?.results.map((item) => (
            <Link
              href={`${PRIVATE_ROUTES.QUIZZES.VIEW}/${item.id}`}
              key={item.id}>
              <h2>{item.title}</h2>
              {item.description && <p>{item.description}</p>}

              <span>
                <b>Criado por:</b> {item.owner.first_name}
              </span>
            </Link>
          ))}
        </div>
      </S.Content>
    </S.Wrapper>
  );
};
