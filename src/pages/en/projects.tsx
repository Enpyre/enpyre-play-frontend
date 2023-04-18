import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ProjectProvider } from '@/contexts/projects';
import { useCookies } from '@/hooks/cookies';
import { ProjectsPage } from '@/view/environments/private/en/projects-page';

export default function InitialEn() {
  return (
    <>
      <Head>
        <title>Projetos | Enpyre</title>
      </Head>
      <ProjectProvider>
        <ProjectsPage />
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
