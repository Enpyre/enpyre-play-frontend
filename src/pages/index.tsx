import { HomePage } from '@/view/environments/public/home-page';
import Head from 'next/head';

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
