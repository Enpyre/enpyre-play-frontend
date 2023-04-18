import { GroupBase, Props as SelectProps } from 'react-select';

export type ListItem<T = number | string> = {
  id?: T;
  external_id?: T;
  label: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};

export type ItemOption = {
  readonly label: string;
  readonly value?: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
};

export type Props = {
  name: string;
  label?: string;
  error?: string;
  toForm?: boolean;
  loading?: boolean;
  className?: string;
  options: ListItem<string>[];
  onClick?(): unknown;
  defaultOptions?: boolean;
  noCloseMenuOnSelect?: boolean;
} & Omit<
  SelectProps<ItemOption, boolean, GroupBase<ItemOption>>,
  'styles' | 'options'
>;
