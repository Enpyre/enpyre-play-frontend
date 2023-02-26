import Link from 'next/link';

import { UserSettings } from './components/user-settings';
import * as S from './styles';
export const Header = () => {
  return (
    <>
      <S.Wrapper>
        <Link href="/">
          <S.Logo />
        </Link>
        <S.Actions>
          <ol>
            <li className="primary">
              <Link href="/en/projects">Ver projetos</Link>
            </li>
          </ol>
        </S.Actions>
        <UserSettings />
      </S.Wrapper>
    </>
  );
};
