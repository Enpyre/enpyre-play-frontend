import Link from 'next/link';
import { useRouter } from 'next/router';

import { UserSettings } from './components/user-settings';
import { menuList } from './mapped';
import * as S from './styles';
export const Header = () => {
  const router = useRouter();
  return (
    <>
      <S.Wrapper>
        <Link href="/">
          <S.Logo />
        </Link>
        <S.Actions>
          <ol>
            {menuList.map((item) => (
              <li
                className={router.asPath === item.href ? 'primary' : ''}
                key={item.id}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ol>
        </S.Actions>
        <UserSettings />
      </S.Wrapper>
    </>
  );
};
