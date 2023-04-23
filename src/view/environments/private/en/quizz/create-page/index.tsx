import arrayMutators from 'final-form-arrays';
import { useRouter } from 'next/router';
import { CircleNotch, TextAa } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import { toast } from 'react-toastify';

import { Quiz, QuizFormData } from '@/contexts/quizzes/types';
import { useAuth } from '@/hooks/auth';
import { useQuizzes } from '@/hooks/quizzes';
import { ButtonGroup } from '@/view/components/form/button-group';
import { Input } from '@/view/components/form/input';
import { GroupForm } from '@/view/components/form/styles';
import { Button } from '@/view/components/form/styles';
import { Textarea } from '@/view/components/form/textarea';
import { PageIdentification } from '@/view/components/page-identification';

import { Header } from '../../../layout/header';
import { MultipleChoice } from './options/multiple-choice';
import * as S from './styles';

export const CreateQuizzPage = () => {
  const { createQuiz, fetchQuizzes } = useQuizzes();
  const { user } = useAuth();
  const [states, setStates] = useState({
    loading: false,
    error: false,
    send: false,
    text: 'Formulário não enviado',
  });
  const router = useRouter();

  const handleSubmit = async (dataForm: QuizFormData) => {
    setStates((old) => {
      return { ...old, loading: true };
    });
    const payload: Quiz = {
      title: dataForm.title,
      description: dataForm.description,
      quizz_type: dataForm.quizz_type,
      owner: {
        id: user?.id as number,
        first_name: user?.first_name as string,
        last_name: user?.last_name as string,
        picture: user?.picture as string,
      },
      questions: dataForm?.questions?.map((item) => {
        return {
          title: item.title,
          content: item.content ?? '',
          answers: item?.answers?.map((answer) => {
            return {
              title: answer.title,
              content: answer.content,
              is_correct: answer.is_correct,
              score_amount: answer.is_correct ? 10 : 0,
            };
          }),
        };
      }),
    };
    const { error, msgError } = await createQuiz(payload);
    if (error) {
      setStates((old) => {
        return {
          ...old,
          loading: false,
          error: true,
          text: msgError ?? 'Ops... algo deu errado durante o envio',
        };
      });
      return;
    }
    setStates((old) => {
      return { ...old, loading: false, send: true, text: 'Perguntas enviadas' };
    });
    router.push('/en/quizzes');
    toast.success('Quizz criado com sucesso!');
  };

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <S.Wrapper>
      <Header />
      <PageIdentification title="Criar Quizz" />
      <S.Content>
        <S.Container isLoading={states.loading}>
          {states.loading && <CircleNotch />}

          {!states.loading && !states.send && (
            <Form
              onSubmit={handleSubmit}
              mutators={{ ...arrayMutators }}
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <GroupForm>
                    <Input
                      title="Título:*"
                      name="title"
                      type="text"
                      placeholder="Título do Quizz"
                      icon={<TextAa />}
                    />
                  </GroupForm>
                  <GroupForm>
                    <Textarea
                      title="Descrição:"
                      name="description"
                      placeholder="Digite uma descrição"
                      icon={<TextAa />}
                    />
                  </GroupForm>
                  <GroupForm>
                    <ButtonGroup
                      title="Tipo de Quizz"
                      name="quizz_type"
                      items={[
                        { title: 'Multipla Escolha', value: 'multiple_choice' },
                        {
                          title: 'Verdadeiro ou Falso',
                          value: 'true_false',
                          disabled: true,
                        },
                        {
                          title: 'Preencha o espaço em branco',
                          value: 'fill_in_the_blank',
                          disabled: true,
                        },
                        {
                          title: 'Multiplas respostas',
                          value: 'multiple_answer',
                          disabled: true,
                        },
                      ]}
                    />
                  </GroupForm>
                  {values.quizz_type === 'multiple_choice' && (
                    <MultipleChoice />
                  )}
                  <GroupForm minHeight={80}>
                    <Button
                      disabled={
                        !values.title ||
                        !values.quizz_type ||
                        !values.questions?.length ||
                        values.questions.some((item) => !item.title) ||
                        values.questions.some(
                          (item) => !item.answers?.length,
                        ) ||
                        values.questions.some((item) =>
                          item.answers?.some((answer) => !answer.title),
                        ) ||
                        values.questions.some((item) =>
                          item.answers?.every((answer) => !answer.is_correct),
                        )
                      }>
                      Enviar
                    </Button>
                  </GroupForm>
                </form>
              )}
            />
          )}

          {states.send && <p>{states.text}</p>}
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};
