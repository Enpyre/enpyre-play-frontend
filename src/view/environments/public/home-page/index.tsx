import { CodeEditor } from '@/view/components/svg/code-editor';
import Modal from '@/view/components/ui/modal';
import { BodyAlert } from '@/view/components/ui/modal/body-alert';
import { useToModal } from '@/view/components/ui/modal/hooks/use-to-modal';
import {
  onActionModalType,
  OptionsModalType,
} from '@/view/components/ui/modal/types';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../layout/header';
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
            <a href="#start">Start Coding</a>
          </S.Left>
          <S.Right>
            <CodeEditor />
          </S.Right>
        </S.Hero>
      </S.Main>
    </>
  );
};
