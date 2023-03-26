import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/auth';
import { useCookies } from '@/hooks/use-cookies';

const EnProjects = dynamic(
  () =>
    import('@/view/environments/private/en-projects').then(
      (module) => module.EnProjects,
    ),
  { ssr: false },
);

export default function InitialEn() {
  const { user } = useAuth();
  useEffect(() => {
    console.log('valor interno -> ', user);
  }, [user]);
  return (
    <>
      <Head>
        <title>Hora de codar | Enpyre</title>
      </Head>
      <EnProjects />
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
