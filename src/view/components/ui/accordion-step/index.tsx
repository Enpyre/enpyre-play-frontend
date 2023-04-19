import { CaretDown, Trash } from 'phosphor-react';
import { useState } from 'react';

import * as S from './styles';

type Props = {
  stepName: string;
  index: number;
  content: React.ReactNode;
  totalItems: number;
  callbackDelete(): void;
};

/**
 * Componente abre e fecha do Accordion
 * @param stepName string
 * @param index number
 * @param content ReactNode
 * @param totalItems number qtd de itens no array
 * @returns Detalhe do accordion
 */
export const AccordionStep = ({
  stepName,
  index,
  content,
  totalItems,
  callbackDelete,
}: Props) => {
  const [isOpen, setIsOpen] = useState(index === 0 ?? false);

  return (
    <S.Wrapper isOpen={isOpen}>
      <div>
        <h2>
          {stepName} {index + 1}
        </h2>

        <div>
          {totalItems > 1 && (
            <button onClick={() => callbackDelete()}>
              <Trash weight="fill" />
            </button>
          )}
          <button type="button" onClick={() => setIsOpen((old) => !old)}>
            <CaretDown />
          </button>
        </div>
      </div>
      <div>{content}</div>
    </S.Wrapper>
  );
};
