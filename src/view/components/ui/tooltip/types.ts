/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ReactElement, ReactNode } from 'react';

export type Props = {
  disabled?: boolean;
  notArrow?: boolean;
  className?: string;
  sideOffset?: number;
  children: ReactNode;
  alignOffset?: number;
  offsetArrow?: number;
  defaultView?: boolean;
  trigger: ReactElement;
  side?: 'bottom' | 'top';
  updateTrigger?: boolean;
  notDefaultContent?: boolean;
  as?: string | ComponentType<any>;
  align?: 'right' | 'left' | 'center';
};
