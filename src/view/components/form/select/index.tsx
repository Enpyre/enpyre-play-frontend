import React from 'react';
import { Field } from 'react-final-form';
import ReactSelect from 'react-select';

import { ErrorField, LabelField } from '../styles';
import { stylesSelect, Wrapper } from './styles';
import { ItemOption, Props } from './types';

const Select = ({
  name,
  label,
  error,
  options,
  className,
  toForm = true,
  loading = false,
  noCloseMenuOnSelect,
  onClick,
  ...rest
}: Props) => {
  if (loading) {
    return (
      <Wrapper className={className + ' skeleton'}>
        <div className="label"></div>
        <div></div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className} onClick={onClick}>
      {!!label && <LabelField htmlFor={name}>{label}</LabelField>}
      {toForm ? (
        <Field name={name}>
          {({ meta, input }) => (
            <>
              <ReactSelect
                {...rest}
                {...input}
                options={options}
                components={{
                  IndicatorSeparator: () => null,
                }}
                closeMenuOnSelect={!noCloseMenuOnSelect}
                styles={stylesSelect}
                noOptionsMessage={() => 'Sem opções.'}
              />
              {(meta.error || meta.submitError) && meta.touched && (
                <ErrorField>{meta.error || meta.submitError}</ErrorField>
              )}
            </>
          )}
        </Field>
      ) : (
        <>
          <ReactSelect
            {...rest}
            options={options}
            closeMenuOnSelect={!noCloseMenuOnSelect}
            components={{
              IndicatorSeparator: () => null,
            }}
            styles={stylesSelect}
            noOptionsMessage={() => 'Sem opções.'}
          />
          {!!error && <ErrorField className="error">Teste de erro</ErrorField>}
        </>
      )}
    </Wrapper>
  );
};

export type { ItemOption };

export default Select;
