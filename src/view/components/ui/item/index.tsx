import Link from 'next/link';
import { Dropdown, DropdownProps, ItemsDropdownProps } from '../dropdown';
import * as S from './styles';

export type ItemsProps = {
  name: string;
  mainPath: string;
  to?: string;
  onClick?: void;
  position?: DropdownProps['position'];
  noUppercase?: boolean;
  dropdown?: ItemsDropdownProps[];
};

export const Item = ({
  name,
  to,
  onClick,
  position,
  noUppercase,
  dropdown,
  mainPath,
}: ItemsProps) => {
  return (
    <>
      {dropdown === undefined && (
        <S.Wrapper key={to} onClick={() => onClick} isSelected={false}>
          <Link href={to as string}>{name}</Link>
        </S.Wrapper>
      )}
      {dropdown !== undefined && (
        <Dropdown
          key={to}
          name={name}
          position={position}
          noUppercase={noUppercase}
          items={dropdown}
          isSelected={false}
        />
      )}
    </>
  );
};
