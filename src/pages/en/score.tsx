import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { ScoreProvider } from '@/contexts/scores';
import { useAuth } from '@/hooks/auth';
import { useCookies } from '@/hooks/use-cookies';
import { EnScore } from '@/view/environments/private/en-score';

export default function Quizzes() {
  const { user } = useAuth();
  useEffect(() => {
    console.log('valor interno -> ', user);
  }, [user]);
  return (
    <ScoreProvider>
      <Head>
        <title>Consegue acertar? | Enpyre</title>
      </Head>
      <EnScore />
    </ScoreProvider>
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
