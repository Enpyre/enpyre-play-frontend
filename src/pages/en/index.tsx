import { KEYS } from '@/constants/keys';
import { TokenAndRefresh } from '@/contexts/auth/types';
import { useAuth } from '@/hooks/auth';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';

export default function InitialEn() {
  const { user } = useAuth();

  useEffect(() => {
    console.log('valor interno -> ', user);
  }, [user]);
  return <p>você entrouu!!!</p>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)[KEYS.STORAGE.USER_TOKEN];

  if (!cookies) {
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
