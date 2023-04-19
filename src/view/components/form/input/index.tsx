import formatStringByPattern from 'format-string-by-pattern';
import { InputHTMLAttributes } from 'react';
import { Field } from 'react-final-form';

import { ErrorField, LabelField } from '../styles';
import { TYPES_MASK } from './constants';
import { CheckboxGroup, InputGroup, Wrapper } from './styles';
type Props = {
  title?: string;
  name: string;
  type: string;
  placeholder?: string;
  icon?: React.ReactNode;
  color?: string;
  isNone?: boolean;
  mask?: 'CPF' | 'PHONE' | 'MONEY' | 'EXPIRES';
  isLoading?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Input = ({
  title,
  name,
  type,
  placeholder,
  icon,
  color,
  isNone,
  mask,
  isLoading,
  ...rest
}: Props) => {
  return (
    <Wrapper isNone={isNone} isLoading={!!isLoading}>
      <Field
        name={name}
        type={type}
        parse={
          mask !== 'MONEY' && mask !== undefined
            ? formatStringByPattern(TYPES_MASK[mask])
            : undefined
        }>
        {({ input, meta }) => (
          <>
            {type !== 'checkbox' && type !== 'file' && (
              <>
                {title && <LabelField htmlFor={name}>{title}</LabelField>}
                <InputGroup color={color}>
                  <input
                    {...rest}
                    {...input}
                    type={type}
                    placeholder={placeholder}
                  />
                  <i>{icon}</i>
                </InputGroup>
                {(meta.error || meta.submitError) && meta.touched && (
                  <ErrorField>{meta.error || meta.submitError}</ErrorField>
                )}
              </>
            )}
            {type === 'checkbox' && (
              <CheckboxGroup>
                <label>
                  <input {...input} type={type} /> {title}
                </label>
              </CheckboxGroup>
            )}
          </>
        )}
      </Field>
    </Wrapper>
  );
};
