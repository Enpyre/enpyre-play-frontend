import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useCookies } from '@/hooks/use-cookies';

export default function InitialEn() {
  return (
    <>
      <Head>
        <title>Hora de codar | Enpyre</title>
      </Head>
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
    redirect: {
      destination: '/en/projects',
      permanent: false,
    },
  };
};
