import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ProjectProvider } from '@/contexts/projects';
import { useCookies } from '@/hooks/use-cookies';

const EnProjects = dynamic(
  () =>
    import('@/view/environments/private/en-project').then(
      (module) => module.EnProject,
    ),
  { ssr: false },
);

export default function InitialEn() {
  const router = useRouter();
  const projectId = router.query.id;

  if (typeof projectId !== 'string') return;

  return (
    <>
      <ProjectProvider>
        <Head>
          <title>Hora de codar | Enpyre</title>
        </Head>
        <EnProjects projectId={parseInt(projectId)} />
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
