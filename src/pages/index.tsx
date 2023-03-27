import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useCookies } from '@/hooks/use-cookies';
import { HomePage } from '@/view/environments/public/home-page';

export default function Home() {
  return (
    <>
      <Head>
        <title>Enpyre - A Python game engine in React</title>
      </Head>
      <HomePage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLogged } = useCookies(ctx);

  if (isLogged) {
    return {
      redirect: {
        destination: '/en/projects',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
