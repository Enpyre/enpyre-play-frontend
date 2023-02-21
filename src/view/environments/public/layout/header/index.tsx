import { useCookies } from '@/hooks/use-cookies';
import Link from 'next/link';
import { useState } from 'react';
import { ModalSign } from './components/modal-sign';
import * as S from './styles';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogged } = useCookies();
  return (
    <>
      <S.Wrapper>
        <S.Logo />
        <S.Actions>
          <ol>
            {isLogged && (
              <li className="primary">
                <Link href="/en/projects">Ver projetos</Link>
              </li>
            )}
            {!isLogged && (
              <>
                <li>
                  <button onClick={() => setIsOpen(true)}>Entrar</button>
                </li>
                <li className="primary">
                  <button onClick={() => setIsOpen(true)}>Cadastrar</button>
                </li>
              </>
            )}
          </ol>
        </S.Actions>
      </S.Wrapper>
      <ModalSign isOpen={isOpen} callbackClose={() => setIsOpen(false)} />
    </>
  );
};
