import { InputHTMLAttributes } from 'react';

import { ListItem } from '../../../../types';

export type Props = {
  name: string;
  label?: string;
  notForm?: boolean;
  loading?: boolean;
  className?: string;
  isDependent?: boolean;
  disabledEmpty?: boolean;
  indeterminate?: boolean;
  type?: 'button' | 'label';
  onChangeValue?: (value: boolean) => void;
  items?: (ListItem<string> & { name?: string })[];
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
