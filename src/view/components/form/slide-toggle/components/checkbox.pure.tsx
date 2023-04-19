import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Props } from '../types';

export const CheckboxPure = ({
  name,
  label,
  checked,
  onChange,
  onChangeValue,
  isDependent = false,
  ...rest
}: Props) => {
  const [value, setValue] = useState(!!checked);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const val = !value;

      if (!isDependent) {
        setValue(val);
      }

      if (onChangeValue) {
        onChangeValue(val);
      }

      if (onChange) {
        onChange(event);
      }
    },
    [isDependent, onChange, onChangeValue, value],
  );

  useEffect(() => {
    setValue((stt) => {
      if (stt !== checked) return !!checked;
      return stt;
    });
  }, [checked]);

  return (
    <>
      <input
        id={name}
        name={name}
        checked={value}
        type="checkbox"
        onChange={handleChange}
        {...rest}
      />
      {!!label && <label htmlFor={name}>{label}</label>}
    </>
  );
};
