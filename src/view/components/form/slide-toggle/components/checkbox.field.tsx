import { Field } from 'react-final-form';

import { Props } from '../types';

export const CheckboxField = ({ name, label, ...rest }: Props) => {
  return (
    <Field name={name} type="checkbox">
      {({ input, meta }) => (
        <>
          <input
            {...input}
            {...rest}
            id={name}
            className={
              (meta?.error || meta?.submitError) && meta?.touched ? 'error' : ''
            }
          />
          {!!label && <label htmlFor={name}>{label}</label>}
        </>
      )}
    </Field>
  );
};
