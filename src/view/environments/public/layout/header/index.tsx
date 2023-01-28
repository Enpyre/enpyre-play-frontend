import { Dropdown, DropdownProps } from '@/view/components/ui/dropdown';
import { GithubLogo } from 'phosphor-react';
import * as S from './styles';
export const Header = () => {
  const dropdownList: DropdownProps[] = [
    {
      id: 0,
      name: 'Login',
      noUppercase: true,
      position: 'right',
      items: [
        {
          id: 0,
          name: (
            <>
              <GithubLogo /> Login With GitHub
            </>
          ),
          to: 'teste',
        },
      ],
    },
    {
      id: 0,
      name: 'Sign In',
      noUppercase: true,
      position: 'right',
      variant: 'solid',
      items: [
        {
          id: 0,
          name: (
            <>
              <GithubLogo /> Sign In With GitHub
            </>
          ),
          to: '/login/github',
        },
      ],
    },
  ];
  return (
    <>
      <S.Wrapper>
        <S.Logo />
        <S.Actions>
          <ol>
            <>
              {dropdownList.map((item, index) => (
                <Dropdown
                  id={item.id}
                  key={index}
                  name={item.name}
                  position={item.position}
                  variant={item.variant}
                  items={item.items}
                />
              ))}
            </>
          </ol>
        </S.Actions>
      </S.Wrapper>
    </>
  );
};
