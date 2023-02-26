import Head from 'next/head';

import { CallbackPage } from '@/view/environments/public/callback-page';

export default function Callback() {
  return (
    <>
      <Head>
        <title>Enpyre - Validando acesso...</title>
      </Head>
      <CallbackPage />
    </>
  );
}
