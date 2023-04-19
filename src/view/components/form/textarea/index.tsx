import { Field } from 'react-final-form';

import { ErrorField, LabelField } from '../styles';
import * as S from './styles';
type Props = {
  title: string;
  name: string;
  placeholder?: string;
  icon?: React.ReactNode;
  color?: string;
  accept?: string;
  isLoading?: boolean;
};
export const Textarea = ({
  title,
  name,
  placeholder,
  icon,
  color,
  isLoading,
}: Props) => {
  return (
    <S.Wrapper isLoading={!!isLoading}>
      <Field name={name}>
        {({ input, meta }) => (
          <>
            {title && <LabelField htmlFor={name}>{title}</LabelField>}
            <S.InputGroup color={color}>
              <textarea {...input} placeholder={placeholder} />
              <i>{icon}</i>
            </S.InputGroup>
            {(meta.error || meta.submitError) && meta.touched && (
              <ErrorField>{meta.error || meta.submitError}</ErrorField>
            )}
          </>
        )}
      </Field>
    </S.Wrapper>
  );
};
