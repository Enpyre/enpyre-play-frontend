import { StylesConfig } from 'react-select';
import styled from 'styled-components';

import { light } from '@/helpers';

import { ItemOption } from './types';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  position: relative;

  &.skeleton {
    & > div {
      height: 35px;
      border-radius: 4px;

      &.label {
        height: 11px;
        max-width: 30%;
        margin-bottom: 2px;
      }
    }
  }
`;

export const stylesSelect: StylesConfig<ItemOption> = {
  control: (styles, { isDisabled }) => ({
    ...styles,
    fontSize: 14,
    minHeight: 46,
    borderRadius: 8,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: isDisabled ? light.colors.neutral.n400 : light.colors.primary.p900,
    borderColor: isDisabled
      ? light.colors.neutral.n400
      : light.colors.primary.p900,

    ':hover': {
      color: light.colors.primary.p800,
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: 14,
      cursor: isDisabled ? 'not-allowed' : 'default',
      color: isDisabled
        ? light.colors.neutral.n700
        : isSelected
        ? 'white'
        : light.colors.neutral.n700,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? light.colors.primary.p800
        : isFocused
        ? light.colors.neutral.n700
        : light.colors.neutral.n400,

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : light.colors.neutral.n500
          : undefined,
      },
    };
  },
  input: (styles, { isDisabled }) => ({
    ...styles,
    alignItems: 'center',
    color: isDisabled ? light.colors.neutral.n400 : light.colors.neutral.n400,
  }),
  placeholder: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? light.colors.neutral.n400 : light.colors.neutral.n700,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: light.colors.shades.white,
  }),
  multiValue: (styles) => ({
    ...styles,
    borderRadius: 50,
    backgroundColor: 'transparent',
    border: `1px solid ${light.colors.neutral.n400}`,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: light.colors.shades.white,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    cursor: 'pointer',
    color: light.colors.primary.p900,

    ':hover': {
      backgroundColor: 'transparent',
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '2px 8px 2px 5px',
  }),
  dropdownIndicator: (base, { isDisabled }) => ({
    ...base,
    color: isDisabled ? light.colors.neutral.n400 : light.colors.primary.p900,

    ':hover': {
      color: light.colors.primary.p800,
    },
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    cursor: 'pointer',
    color: light.colors.primary.p800,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: light.colors.primary.p800,
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: light.colors.neutral.n500,
  }),
  clearIndicator: (styles) => ({
    ...styles,

    ':hover': {
      color: light.colors.primary.p800,
    },

    '> svg': {
      pointerEvents: 'none',
    },
  }),
};
