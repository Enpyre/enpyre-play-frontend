import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { QuizProvider } from '@/contexts/quizzes';
import { useCookies } from '@/hooks/cookies';
import { CreateQuizzPage } from '@/view/environments/private/en/quizz/create-page';

export default function InitialEn() {
  return (
    <>
      <Head>
        <title>Criar Quizz | Enpyre</title>
      </Head>
      <QuizProvider>
        <CreateQuizzPage />
      </QuizProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLogged } = useCookies(ctx);
  if (!isLogged) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
