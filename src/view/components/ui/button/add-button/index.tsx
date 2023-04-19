import { Plus } from 'phosphor-react';
import { MouseEventHandler } from 'react';

import { Tooltip } from '../../tooltip';
import * as S from './styles';
export type Props = {
  onClick?: MouseEventHandler;
  color?: 'background' | 'darkest';
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
};
export const AddButton = ({
  onClick,
  color,
  title,
  description,
  icon,
  isDisabled,
}: Props) => {
  return (
    <>
      {description && (
        <Tooltip
          trigger={
            <S.Wrapper
              isDisabled={isDisabled}
              color={color}
              type="button"
              disabled={isDisabled}
              onClick={onClick}>
              <div>
                <i className="circle-first" />
                <i className="circle-second" />
                <Plus weight="bold" />
              </div>
              {icon && icon}
              {title && title}
              {!title && 'Adicionar'}
            </S.Wrapper>
          }>
          <p>{description}</p>
        </Tooltip>
      )}
      {!description && (
        <S.Wrapper
          isDisabled={isDisabled}
          color={color}
          type="button"
          disabled={isDisabled}
          onClick={onClick}>
          <div>
            <i className="circle-first" />
            <i className="circle-second" />
            <Plus weight="bold" />
          </div>
          {icon && icon}
          {title && title}
          {!title && 'Adicionar'}
        </S.Wrapper>
      )}
    </>
  );
};
