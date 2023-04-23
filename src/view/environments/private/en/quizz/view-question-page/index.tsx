import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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
  const { fetchQuiz, quiz, fetchUserAnswers, userAnswers, submitUserAnswers } =
    useQuizzes();
  const [userAnswersState, setUserAnswersState] = useState(
    userAnswers?.results || [],
  );
  const router = useRouter();

  useEffect(() => {
    fetchQuiz(Number(id));
  }, [fetchQuiz, id]);

  useEffect(() => {
    fetchUserAnswers(Number(id));
  }, [fetchUserAnswers, id]);

  useEffect(() => {
    setUserAnswersState(userAnswers?.results || []);
  }, [userAnswers]);

  const handleAnswerSelected = useCallback(
    (question_id: number | undefined, value: string) => {
      setUserAnswersState((oldState) => {
        const answered = oldState?.find(
          (answer) => !!question_id && answer.question_id === question_id,
        );
        if (answered?.id) return oldState;
        if (answered) {
          return oldState?.map((answer) => {
            if (answer.question_id === question_id) {
              return {
                ...answer,
                answer_id: Number(value),
              };
            }
            return answer;
          });
        }
        return [
          ...oldState,
          {
            question_id,
            answer_id: Number(value),
          },
        ];
      });
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    const answer_ids = userAnswersState?.map((answer) => answer.answer_id);
    await submitUserAnswers(Number(id), answer_ids);
    toast.success('Respostas enviadas com sucesso!');
  }, [submitUserAnswers, userAnswersState, id]);

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
                value={String(
                  userAnswersState?.find(
                    (user_answer) => user_answer.question_id === item.id,
                  )?.answer_id || '',
                )}
                items={item.answers.map((answer, index) => {
                  return {
                    title: String(index + 1),
                    value: String(answer.id),
                    checked: !!userAnswersState?.find(
                      (user_answer) => user_answer.answer_id === answer.id,
                    ),
                    disabled: !!userAnswersState?.find(
                      (user_answer) =>
                        user_answer.answer_id === answer.id && !!user_answer.id,
                    ),
                  };
                })}
                onChangeValue={(value) => handleAnswerSelected(item.id, value)}
              />
            </div>
          ))}
        </div>

        <Button
          title="Enviar Respostas"
          onClick={handleSubmit}
          disabled={
            userAnswersState.filter((a) => !a.id).length !==
            quiz?.results.length
          }
        />
      </S.Content>
    </S.Wrapper>
  );
};
