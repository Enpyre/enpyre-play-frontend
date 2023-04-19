import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { QuizProvider } from '@/contexts/quizzes';
import { useCookies } from '@/hooks/cookies';
import { QuizzViewQuestion } from '@/view/environments/private/en/quizz/view-question-page';

export default function QuizzesID({ params }: { params: { id: string } }) {
  return (
    <>
      <Head>
        <title>Quizz | Enpyre</title>
      </Head>
      <QuizProvider>
        <QuizzViewQuestion id={params.id} />
      </QuizProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLogged } = useCookies(ctx);
  const { params } = ctx;
  console.log('valor', ctx);
  if (!isLogged) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { params },
  };
};
