import { useAuth } from '@/hooks/auth';
import { useCookies } from '@/hooks/use-cookies';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

export default function InitialEn() {
  const { user } = useAuth();

  useEffect(() => {
    console.log('valor interno -> ', user);
  }, [user]);
  return (
    <>
      <p>você entrouu!!!</p>
      <pre>{JSON.stringify(user, 0, 2)}</pre>
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
