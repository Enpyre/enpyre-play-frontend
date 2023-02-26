import Link from 'next/link';

import { CodeEditor } from '@/view/components/svg/code-editor';

import { Header } from '../layout/header';
import { Carousel } from './components/carousel';
import * as S from './styles';

export const HomePage = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.Hero>
          <S.Left>
            <div>
              <h2>A Python game engine in React</h2>
              <h3>
                you can build and run your projects from anywhere in the world.
              </h3>
            </div>
            <Link href="/en">Partiu codar</Link>
          </S.Left>
          <S.Right>
            <CodeEditor />
          </S.Right>
        </S.Hero>
        <Carousel />
      </S.Main>
    </>
  );
};
