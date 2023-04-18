import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

type Props = {
  name: string;
  value: string;
  isDependent?: boolean;
  onChangeValue?: (value: boolean) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const RadioPure = ({
  name,
  checked,
  isDependent,
  onChangeValue,
  onChange,
  ...rest
}: Props) => {
  const [value, setValue] = useState(!!checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = !value;
    if (!isDependent) {
      setValue(val);
      console.log('valor do !isDependent -> ', val);
    }

    if (onChangeValue) {
      onChangeValue(val);
    }

    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    console.log('valor do CHECKED -> ', checked);
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
        type="radio"
        onChange={handleChange}
        {...rest}
      />
    </>
  );
};
