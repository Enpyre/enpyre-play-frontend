import { useAuth } from '@/hooks/auth';
import { Item, ItemsProps } from '@/view/components/ui/item';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import * as S from './styles';

/**
 * Componente de configurações do usuário
 */
export const UserSettings = () => {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignOut = useCallback(async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      signOut();
    } catch (err) {
      return;
    }
  }, [signOut]);

  const listItems: ItemsProps = {
    name: `${user?.first_name as string} ${user?.last_name as string}`,
    mainPath: '/settings/*',
    position: 'right',
    noUppercase: true,
    dropdown: [
      {
        name: 'Configurações',
        variant: 'normal',
        to: '/settings/profile',
      },
      {
        name: loading ? 'Saindo...' : 'Sair',
        variant: 'normal',
        onClick: () => handleSignOut(),
      },
    ],
  };
  return (
    <S.Wrapper>
      <S.CircleInitials>
        <Image
          width={40}
          height={40}
          alt="Avatar do usuário"
          sizes="80vw"
          style={{ objectFit: 'cover' }}
          src={user?.picture as string}
        />
      </S.CircleInitials>
      <Item
        name={listItems.name}
        position={listItems.position}
        noUppercase={listItems.noUppercase}
        mainPath={listItems.mainPath}
        dropdown={listItems.dropdown}
      />
    </S.Wrapper>
  );
};
