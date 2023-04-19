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
              <h3>{item.title}</h3>
              <p>{item.content}</p>

              <h4>Respostas</h4>
              {item.answers.map((answer, index) => (
                <div key={answer.id} className="answer">
                  <h4>
                    {index + 1}. {answer.title}
                  </h4>
                  {answer.content && <p>{answer.content}</p>}
                </div>
              ))}

              <h4 className="user-answer">Qual(is) alternativa correta?</h4>
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
