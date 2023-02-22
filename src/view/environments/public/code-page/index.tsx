import Code from '@/view/components/ui/code';
import { Header } from '../layout/header';
import * as S from './styles';
import { EnpyreProvider } from 'enpyre';

export const CodePage = () => {
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
            <a href="/en">Partiu codar</a>
          </S.Left>
          <S.Right>
            <EnpyreProvider>
              <Code />
            </EnpyreProvider>
          </S.Right>
        </S.Hero>
      </S.Main>
    </>
  );
};
