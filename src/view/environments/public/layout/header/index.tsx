import { useState } from 'react';
import { ModalSign } from './components/modal-sign';
import * as S from './styles';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Wrapper>
        <S.Logo />
        <S.Actions>
          <ol>
            <li>
              <button onClick={() => setIsOpen(true)}>Login</button>
            </li>
            <li className="primary">
              <button onClick={() => setIsOpen(true)}>Sign In</button>
            </li>
          </ol>
        </S.Actions>
      </S.Wrapper>
      <ModalSign isOpen={isOpen} callbackClose={() => setIsOpen(false)} />
    </>
  );
};
