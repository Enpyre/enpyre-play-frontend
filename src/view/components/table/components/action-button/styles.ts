import styled, { css } from 'styled-components';

import { convertFont } from '@/utils';

export const ButtonStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  background: ${({ theme }) => theme.colors.neutral.n50};
  border-radius: 20px;
  position: relative;
`;

export const SVGStyles = (fontSize?: number) => css`
  svg {
    color: ${({ theme }) => theme.colors.primary.p800};
    font-size: ${fontSize ? convertFont.toRem(fontSize) : '1.625rem'};
  }
`;

export const CircleTop = css`
  position: absolute;
  content: '';
  display: block;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  top: -2px;
  right: 2px;

  background-color: ${({ theme }) => theme.colors.primary.p800};
`;

export const Wrapper = styled.button<{ hasAny?: boolean }>`
  ${ButtonStyles}

  ${SVGStyles(undefined)}

  cursor: pointer;
  border: 0;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ hasAny }) =>
    hasAny &&
    css`
      &:before {
        ${CircleTop}
      }
    `}
`;

export const Linked = styled.div`
  ${ButtonStyles}
  a {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${SVGStyles(22)}
  }
`;
