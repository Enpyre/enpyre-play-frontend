import { ValidationErrors } from 'final-form';
import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react';
import { Field } from 'react-final-form';

import {
  ErrorField,
  LabelField,
} from '../../../../view/components/form/styles';
import * as S from './styles';

export type Props = {
  title?: string;
  vibrate?: boolean;
  pulse?: boolean;
  notForm?: boolean;
  isDependent?: boolean;
  touched?: Record<string, boolean>;
  onChangeValue?: (value: string) => void;
  errors?: ValidationErrors;
  name: string;
  items: {
    title: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
  }[];
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * Componente de botões agrupados
 * @param title string
 * @param vibrate boolean
 * @param pulse boolean
 * @param name string
 * @param items Array Objet{value: string, title: string}
 */
export const ButtonGroup = ({
  title,
  vibrate,
  pulse,
  name,
  notForm = false,
  items,
  touched,
  errors,
  onChange,
  value = '',
  onChangeValue,
  ...rest
}: Props) => {
  const [valueState, setValueState] = useState(value);

  console.log('value', value);
  console.log('button items', items);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;

      setValueState(val);

      if (onChangeValue) {
        onChangeValue(val);
      }

      if (onChange) {
        onChange(event);
      }
    },
    [onChange, onChangeValue],
  );

  return (
    <S.Wrapper vibrate={!!vibrate} pulse={!!pulse}>
      {title && <LabelField>{title}</LabelField>}
      <div>
        {items.map((item) => (
          <fieldset key={item.value as string}>
            {notForm && (
              <input
                {...rest}
                name={name}
                type="radio"
                value={item.value}
                onChange={handleChange}
                id={name}
                checked={item.checked}
              />
            )}
            {!notForm && (
              <Field
                {...rest}
                name={name}
                id={item.value}
                value={item.value}
                type="radio"
                checked={item.checked}>
                {({ input }) => (
                  <>
                    <input
                      {...input}
                      {...rest}
                      id={item.value}
                      value={item.value}
                      checked={item.checked}
                    />
                    {touched && errors && errors[name] && touched[name] && (
                      <ErrorField>{errors[name]}</ErrorField>
                    )}
                  </>
                )}
              </Field>
            )}
            <label htmlFor={item.value as string}>{item.title}</label>
          </fieldset>
        ))}
      </div>
    </S.Wrapper>
  );
};
