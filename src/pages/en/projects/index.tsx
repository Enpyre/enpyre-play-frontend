import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { ProjectProvider } from '@/contexts/projects';
import { useAuth } from '@/hooks/auth';
import { useCookies } from '@/hooks/use-cookies';
import { Projects } from '@/view/environments/private/en-projects';

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
      <ProjectProvider>
        <Projects />
      </ProjectProvider>
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
