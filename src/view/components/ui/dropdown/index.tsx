import Link from 'next/link';
import { CaretDown } from 'phosphor-react';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styles';

export type ItemsDropdownProps = {
  name: string | React.ReactNode;
  to?: string;
  variant?: 'normal' | 'outline' | string;
  onClick?: React.MouseEventHandler;
};
export type DropdownProps = {
  name: string | React.ReactNode;
  isSelected?: boolean;
  noUppercase?: boolean;
  variant?: 'normal' | 'solid';
  position?: 'left' | 'center' | 'right';
  items: ItemsDropdownProps[];
};

export const Dropdown = ({
  name,
  items,
  position,
  noUppercase,
  isSelected,
  variant,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const refComponent = useRef<HTMLLIElement>(null);

  const handleToggle = () => {
    setIsOpen((old) => !old);
  };
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      isOpen &&
        refComponent.current &&
        !refComponent.current?.contains(e.target as Node) &&
        setIsOpen(false);
    },
    [isOpen],
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
  }, [handleClickOutside]);
  return (
    <S.Wrapper
      isSelected={!!isSelected}
      ref={refComponent}
      variant={variant ?? 'normal'}>
      <button onClick={() => handleToggle()}>
        {name} <CaretDown />
      </button>
      {isOpen && (
        <S.Menu position={position} noUppercase={noUppercase}>
          {items.map((item, index) => (
            <Fragment key={index}>
              <li className={item.variant ?? ''}>
                {item.onClick !== undefined && (
                  <button onClick={item.onClick}>{item.name}</button>
                )}
                {item.onClick === undefined && (
                  <Link href={item.to as string} onClick={() => handleToggle()}>
                    {item.name}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </S.Menu>
      )}
    </S.Wrapper>
  );
};
