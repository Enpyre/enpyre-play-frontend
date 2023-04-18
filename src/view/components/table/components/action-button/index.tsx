import { Link } from 'react-router-dom';

import { TooltipAdvanced } from '../../../tooltip-advanced';
import * as S from './styles';

type Props = {
  title: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  icon: React.ReactNode;
  hasAny?: boolean;
  to?: string;
  isBlank?: boolean;
  isExternal?: boolean;
};

/**
 * Botão de ação específico da tabela
 * @param hasAny aparece bolinha superior sinalizando algo
 * @param to será um link ao invés de botão
 * @param isBlank abre em outra guia
 */
export const TableActionButton = ({
  title,
  icon,
  onClick,
  disabled,
  hasAny,
  to,
  isBlank,
  isExternal,
}: Props) => {
  return (
    <>
      {!onClick && to && (
        <TooltipAdvanced
          trigger={
            <S.Linked>
              {isExternal && (
                <a href={to} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              )}
              {!isExternal && (
                <Link to={to} target={isBlank ? '_blank' : '_self'}>
                  {icon}
                </Link>
              )}
            </S.Linked>
          }>
          {title}
        </TooltipAdvanced>
      )}
      {onClick && !to && !isExternal && (
        <TooltipAdvanced
          trigger={
            <S.Wrapper onClick={onClick} disabled={disabled} hasAny={hasAny}>
              {icon}
            </S.Wrapper>
          }>
          <p>{title}</p>
        </TooltipAdvanced>
      )}
    </>
  );
};
