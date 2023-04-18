import { InputHTMLAttributes } from 'react';

import { Tooltip } from '../../ui/tooltip';
import { LabelField } from '../styles';
import { CheckboxField } from './components/checkbox.field';
import { CheckboxPure } from './components/checkbox.pure';
import * as S from './styles';
export type Props = {
  variant?: 'normal' | 'vertical';
  name: string;
  title?: string;
  notForm?: boolean;
  description?: string;
  onChange?: (
    value: React.ChangeEvent<HTMLInputElement>,
    id: string | number,
  ) => void;
  onChangeValue?: (value: boolean) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
/**
 * Componente SlideToggle
 * @param variant normal | vertical
 * @param notForm exibe para Formulário ou não Formulário
 * @param name
 * @param onClick
 * @param onChange
 * @param onChangeValue
 * @param inputValues...
 */
export const SlideToggle = ({
  variant,
  title,
  notForm,
  description,
  ...rest
}: Props) => {
  const Component = !notForm ? CheckboxField : CheckboxPure;
  return (
    <>
      {title && (
        <Tooltip
          side="top"
          trigger={
            <S.Wrapper>
              <LabelField>{title}</LabelField>
              <S.Controller variant={variant}>
                <Component {...{ ...rest }} />
                <div className="option" />
                <div className="background" />
              </S.Controller>
            </S.Wrapper>
          }>
          <p>{description}</p>
        </Tooltip>
      )}
      {!title && (
        <>
          {description && (
            <Tooltip
              side="top"
              trigger={
                <S.Controller variant={variant}>
                  <Component {...{ ...rest }} />
                  <div className="option" />
                  <div className="background" />
                </S.Controller>
              }>
              <p>{description}</p>
            </Tooltip>
          )}
          {!description && (
            <S.Controller variant={variant}>
              <Component {...{ ...rest }} />
              <div className="option" />
              <div className="background" />
            </S.Controller>
          )}
        </>
      )}
    </>
  );
};
