import { InputHTMLAttributes } from 'react';
import { Field } from 'react-final-form';

import { ErrorField } from '../../styles';

type Props = {
  name: string;
  value: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const RadioField = ({ name, value, ...rest }: Props) => {
  return (
    <Field {...rest} name={name} id={value} value={value} type="radio">
      {({ input, meta }) => (
        <>
          <input {...input} {...rest} id={value} value={value} />
          {(meta.error || meta.submitError) && meta.touched && (
            <ErrorField>{meta.error || meta.submitError}</ErrorField>
          )}
        </>
      )}
    </Field>
  );
};
