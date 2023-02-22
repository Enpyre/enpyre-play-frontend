import { WarningOctagon } from 'phosphor-react';

import * as S from './styles';

type Props = {
  description: string;
  titleButton?: string;
  onClick?(): void;
};
export const BodyError = ({ description, onClick, titleButton }: Props) => {
  return (
    <S.WrapperError>
      <S.BarIcon type="error">
        <S.Icon type="error">
          <WarningOctagon />
        </S.Icon>
      </S.BarIcon>
      <span>{description}</span>
      <button onClick={onClick}>{titleButton ?? 'Tentar novamente'}</button>
    </S.WrapperError>
  );
};
