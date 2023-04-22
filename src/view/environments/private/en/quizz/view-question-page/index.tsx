import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useQuizzes } from '@/hooks/quizzes';
import { ButtonGroup } from '@/view/components/form/button-group';
import { PageIdentification } from '@/view/components/page-identification';
import { Button } from '@/view/components/ui/button';

import { Header } from '../../../layout/header';
import { PRIVATE_ROUTES } from '../../../paths.routes';
import * as S from './styles';

export type Props = {
  id: string;
};
export const QuizzViewQuestion = ({ id }: Props) => {
  const { fetchQuiz, quiz } = useQuizzes();
  const router = useRouter();

  useEffect(() => {
    fetchQuiz(Number(id));
  }, [fetchQuiz, id]);
  return (
    <S.Wrapper>
      <Header />
      <PageIdentification title="Respondendo Quiz" />
      <S.Content>
        <Button
          title="ver todos os Quizzes"
          onClick={() => router.push(PRIVATE_ROUTES.QUIZZES.VIEW)}
        />

        <div className="questions">
          {quiz?.results.map((item, indexMain) => (
            <div className="question" key={item.id}>
              <h1 className="mx-2 my-4 text-lg font-bold">{item.title}</h1>

              <div className="flex w-full flex-col items-start justify-center">
                <p className="mx-4 text-center">{item.content}</p>
              </div>

              <div className="flex w-full flex-col items-start justify-center py-4">
                <h2 className="text-center font-semibold">Resposta:</h2>

                {item.answers.map((answer, index) => (
                  <div
                    key={answer.id}
                    className="justify-censter flex w-full flex-col items-start px-4">
                    <h4 className="my-2 text-center font-semibold text-blue-500">
                      {index + 1}. {answer.title}
                    </h4>
                    {answer.content && <p className="mx-4">{answer.content}</p>}
                  </div>
                ))}
              </div>

              <h4 className="user-answer my-2 text-center font-semibold text-blue-500">
                Qual alternativa correta?
              </h4>
              <ButtonGroup
                name={`quizz_answer[${indexMain}]`}
                notForm
                items={item.answers.map((answers, index) => {
                  return {
                    title: String(index + 1),
                    value: String(answers.id),
                  };
                })}
              />
            </div>
          ))}
        </div>
      </S.Content>
    </S.Wrapper>
  );
};
