import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { useAuth } from '@/hooks/auth';
import Loading from '@/view/components/loading';

export const CallbackPage = () => {
  const router = useRouter();
  const { code } = router.query;
  const { signIn } = useAuth();

  const responseSignIn = useCallback(async () => {
    if (router.isReady)
      try {
        const { error, msgError } = await signIn({
          code: code as string,
          provider: 'github',
        });

        if (error) {
          throw new Error(msgError);
        }

        router.push('/en');
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) responseSignIn();
  }, [router.isReady]);
  return <Loading isBackground />;
};
