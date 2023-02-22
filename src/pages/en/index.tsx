import { useAuth } from '@/hooks/auth';
import { useCookies } from '@/hooks/use-cookies';
import { EnPage } from '@/view/environments/private/en-page';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

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
      <EnPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
