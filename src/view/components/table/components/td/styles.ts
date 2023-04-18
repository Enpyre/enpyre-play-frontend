import styled, { css } from 'styled-components';

import { convertFont } from '@/utils';

import { Props } from '.';

export const Wrapper = styled.td<{
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  columns?: number;
  gridColumns?: string;
  isBold?: boolean;
  isCenter?: boolean;
  fontSize: Props['fontSize'];
  maxWidth?: number;
}>`
  max-width: ${({ maxWidth }) => maxWidth ?? 'none'}px;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  text-align: ${({ isCenter }) => isCenter && 'center'};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '0')}px;
  padding-right: ${({ paddingRight }) => (paddingRight ? paddingRight : '0')}px;

  ${({ gridColumns, columns }) =>
    (columns || gridColumns) &&
    css`
      & > div {
        width: 100%;
        display: grid;
        gap: 10px;
        justify-content: center;
        align-items: center;
        justify-items: center;

        & > div {
          width: 36px;
          height: 36px;
        }

        ${columns &&
        css`
          grid-template-columns: repeat(${columns}, 1fr);
        `}

        ${gridColumns &&
        css`
          grid-template-columns: ${gridColumns};
        `}
      }
    `}

  ${({ fontSize }) =>
    fontSize &&
    css`
      ${typeof fontSize === 'number' &&
      css`
        font-size: ${convertFont.toRem(fontSize)};
      `}
      ${fontSize === 'xs' &&
      css`
        font-size: ${convertFont.toRem(14)};
      `}
      ${fontSize === 'sm' &&
      css`
        font-size: 1rem;
      `}
      ${fontSize === 'md' &&
      css`
        font-size: 1.125rem;
      `}
      ${fontSize === 'lg' &&
      css`
        font-size: 1.25rem;
      `}
      ${fontSize === 'xl' &&
      css`
        font-size: 1.375rem;
      `}
    `}

    & > a {
    color: ${({ theme }) => theme.colors.neutral.n50};

    &:hover {
      text-decoration: underline;
    }
  }
`;
