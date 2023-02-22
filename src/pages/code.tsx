import Head from 'next/head';
import dynamic from 'next/dynamic';

const CodePage = dynamic(() => import('@/view/environments/public/code-page').then(module => module.CodePage), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Enpyre - A Python game engine in React</title>
      </Head>
      <CodePage />
    </>
  );
}
