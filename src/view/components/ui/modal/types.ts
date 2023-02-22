import { ReactNode } from 'react';

export type Props = {
  cancel?: boolean;
  confirm?: boolean;
  onClose?: () => void;
  titleCancel?: string;
  titleConfirm?: string;
  actionCancel?: () => void;
  actionConfirm?: () => void;
  keepConfirmation?: boolean;
} & PropsModal;

export type BodyProps = {
  text: string;
  description?: ReactNode;
  msgDefaultError?: boolean;
};

export type SizeModal = 'xs' | 'md' | 'lg' | 'hg' | 'xhg';

export type TypeModal =
  | 'scrollable'
  | 'error'
  | 'warning'
  | 'success'
  | 'loading'
  | 'delete';

export type ModalHandles = {
  close: () => void;
  open: (children: ReactNode) => void;
};

export type PropsModal = {
  text?: string;
  title?: string;
  close?: boolean;
  type?: TypeModal;
  size?: SizeModal;
  actions?: boolean;
};

export type OptionsModalType =
  | 'success'
  | 'loading'
  | 'error'
  | 'warning'
  | 'scrollable'
  | 'close';

export type onActionModalType = {
  type: OptionsModalType;
  title?: string;
  description?: string;
  component?: React.ReactNode;
};
