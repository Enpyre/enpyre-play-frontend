import { useState } from 'react';

import * as S from './styles';

type Props = {
  isLoading: boolean;
  thead: string[];
  tbody: React.ReactNode;
  onActive: () => void;
};

export const TableBlur = ({ isLoading, thead, tbody, onActive }: Props) => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    onActive();
    setIsActive(false);
  };
  return (
    <S.WrapperBlur>
      <S.FloatActionButton
        isActive={isActive}
        type="button"
        onClick={() => handleClick()}>
        Clique p/carregar
      </S.FloatActionButton>
      <S.ContainerBlur isBlur={isActive} isLoading={isLoading}>
        <thead>
          <tr>
            {thead.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </S.ContainerBlur>
    </S.WrapperBlur>
  );
};
