import { useAuth } from '@/hooks/auth';
import Loading from '@/view/components/loading';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const CallbackPage = () => {
  const router = useRouter();
  const { code } = router.query;
  const { signIn } = useAuth();

  const responseSignIn = useCallback(async () => {
    let errors = '';
    if (router.isReady)
      try {
        const { data, error, msgError } = await signIn({
          code: code as string,
          provider: 'github',
        });

        if (error) {
          throw new Error(msgError);
        }
        console.log('entrou', data);
        router.push('/en');
      } catch (err) {
        if (err instanceof Error) {
          errors = err.message;
        }
      } finally {
        // router.push('/');
      }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) responseSignIn();
  }, [router.isReady]);
  return <Loading isBackground />;
};
